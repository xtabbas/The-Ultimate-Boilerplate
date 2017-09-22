import React, { PropTypes } from 'react';
import nprogress from 'nprogress';
import LoaderSpinner from '../components/LoaderSpinner';

// Flag for first route loaded on page
// Use it to load Google Analytics and other deferred stuff
let firstRoute = true;

// Function that returns a High-Order Component (wrapped component) with common route logic
export default function asyncRoute(getComponent) {
  return class AsyncComponent extends React.Component {

  // Store wrapped component here so next time we render it immediatelly
    static Component = null;

  // Remembers last scroll positions
  // TODO: We shouldn't allow infinite keys here, implement a *shared* LRU cache
    static scrollPositions = {};

  /*
    All props are coming from react-router's <Route />:
    {
      path        -> the matched route
      component   -> the wrapped component
      ...history, -> https://reacttraining.com/react-router/#history
                     https://github.com/mjackson/history
      match       -> https://reacttraining.com/react-router/#match
    }
   */
    static propTypes = {

      location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
        search: PropTypes.string,
        hash: PropTypes.string,
        state: PropTypes.object
      }).isRequired,
      action: PropTypes.string
    };

    static defaultProps = {
      action: 'PUSH'
    }

  // Flag to check if we are still mounted after async stuff finishes
    state = {
      Component: AsyncComponent.Component
    };

    componentDidMount() {
      this.mounted = true;

      if (AsyncComponent.Component === null) {
        if (!firstRoute) {
        // Show GitHub-style loading bar on top of the viewport
          nprogress.start();
        }
      // Load Wrapped Component (code-split via webpack)
        getComponent().then(m => m.default).then((Component) => {
          if (firstRoute) {
          // We want to handle scroll restoration on our own from now on
            if ('scrollRestoration' in window.history) {
              window.history.scrollRestoration = 'manual';
            }
            firstRoute = false;
          } else {
          // Hide loading bar
            nprogress.done();
          }
        // Store reference to component in HOC
          AsyncComponent.Component = Component;
        // If we are still mounted re-render to display the wrapped component
          if (this.mounted) {
            this.setState({ Component });
          }
        });
      } else {
        const { action, location: { key = 'root' } } = this.props;
      // POP means user is going forward or backward in history, restore previous scroll position
        if (action === 'POP') {
          const pos = AsyncComponent.scrollPositions[ key ];
          if (pos) {
            scroll(pos[ 0 ], pos[ 1 ]);
            return;
          }
        }
      }

    // Scroll to top of viewport
      scroll(0, 0);
    }
    componentWillUnmount() {
    // Remember scroll position so we can restore if we return to this view via browser history
      const { location: { key = 'root' } } = this.props;
    // AsyncComponent.scrollPositions[key] = [window.scrollX, window.scrollY];  // <-- Only supported in CSSOM browsers
      AsyncComponent.scrollPositions[ key ] = [window.pageXOffset, window.pageYOffset]; // IE9+ pageXOffset is alias of scrollX

    // Mark that we are no longer mounted to avoid setting state if the wrapped component still hasn't loaded
      this.mounted = false;
    }

    mounted = false;

    render() {
      const { Component } = this.state;

    // Check if wrapped component module has loaded and render it,
    // otherwise render a spinner
      return Component === null
      ? (
        <div className="text-center" style={{ padding: '5rem 0' }}>
          <LoaderSpinner size={128} delay={true} />
        </div>
      )
      : <Component {...this.props} />;
    }
};
}

// import React from 'react';
// import nprogress from 'nprogress';
// import loadJS from 'fg-loadjs';
// import LoaderSpinner from '../components/LoaderSpinner';
// import preserver from './Preserver';
//
// let firstRoute = true;
//
// function asyncRoute(getComponent) {
//   return class AsyncComponent extends React.Component {
//     static Component = null;
//     mounted = false;
//
//     state = {
//       Component: AsyncComponent.Component
//     };
//
//     componentWillMount() {
//       document.documentElement.scrollTop = 0;
//       if (this.state.Component === null) {
//         if (!firstRoute) {
//           nprogress.start();
//         }
//         getComponent().then(m => m.default).then((Component) => {
//           if (firstRoute) {
//             firstRoute = false;
//             if (process.env.NODE_ENV === 'production') {
//               loadJS('https://www.google-analytics.com/analytics.js');
//             }
//           } else {
//             nprogress.done();
//           }
//           AsyncComponent.Component = Component;
//           if (this.mounted) {
//             this.setState({ Component });
//           }
//         });
//       }
//     }
//
//     componentDidMount() {
//       this.mounted = true;
//     }
//
//     componentWillUnmount() {
//       this.mounted = false;
//     }
//
//     render() {
//       const { Component } = this.state;
//
//       if (Component !== null) {
//         return <Component {...this.props} />;
//       }
//
//       if (preserver.has()) {
//         return preserver.render();
//       }
//       return (
//         <div className="container text-xs-center" style={{ padding: '25vh 0' }}>
//           <LoaderSpinner size={128} delay={true} />
//         </div>
//       );
//     }
//    };
// }
