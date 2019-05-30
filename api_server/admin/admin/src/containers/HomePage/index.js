/*
 *
 * HomePage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { bindActionCreators, compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
 
import cn from 'classnames';
import Block from '../../components/HomePageBlock';
import { selectPlugins } from '../App/selectors';
import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import { getArticles, onChange, submit } from './actions';
import makeSelectHomePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import styles from './styles.scss';

 

export class HomePage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  state = { errors: [] };

  componentDidMount() {
   // this.props.getArticles();
  }

  render() {
    return (
      <div className={cn('container-fluid', styles.containerFluid)}>
         <Helmet title="Home Page" />
          <Block>
            <h3>Welcome to Admin Dashboard</h3>
          </Block>
       </div>
    );
   }
}

// HomePage.propTypes = {
//   getArticles: PropTypes.func.isRequired,
//   homePage: PropTypes.object.isRequired,
//   onChange: PropTypes.func.isRequired,
//   plugins: PropTypes.object.isRequired,
//   submit: PropTypes.func.isRequired,
// };

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
  plugins: selectPlugins(),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getArticles,
      onChange,
      submit,
    },
    dispatch,
  );
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });

// export default connect(mapDispatchToProps)(HomePage);
export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
