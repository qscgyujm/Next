import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Global from '../src/ts/Global';
import { demoAction, InitialState } from '../src/store/demo';

import { compose } from '../src/helper/compose';

const PageA: React.FC<APageProps> = (props) => {
  console.log('props PageA', props);
  const { state, fetchDemo } = props;

  React.useEffect(
    () => {
      fetchDemo();
    },
    [],
  );

  return (
    <div>
      A
      {
        state
        && (
        <div>
          {state}
        </div>
        )
      }
    </div>
  );
};

interface State {
  demo: InitialState
}

export const mapStateToProps = (state: State) => state.demo;

export const mapDispatchToProps = (dispatch: Dispatch) => {
  const {
    fetchDemo,
  } = demoAction;
  return {
    ...bindActionCreators({
      fetchDemo,
    }, dispatch),
  };
};


type ReduxConnectedProps = (
  ReturnType<typeof mapStateToProps>
  & ReturnType<typeof mapDispatchToProps>
)

type APageProps = (
  Global
  & ReduxConnectedProps
)

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  <P extends {}>(
    BaseComponent: React.ComponentType<P>,
  ): React.FC<P> => (props) => {
    console.log('compose', props);

    return (
      <BaseComponent
        {...props}
      />
    );
  },
)(PageA);
