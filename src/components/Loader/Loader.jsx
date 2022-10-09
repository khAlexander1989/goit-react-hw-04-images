import PropTypes from 'prop-types';
import { PropagateLoader } from 'react-spinners';

const cssOverrides = {
  margin: '24px auto',
};

export function Loader({ loading = false }) {
  return (
    <PropagateLoader
      loading={loading}
      size={15}
      color="orangered"
      cssOverride={cssOverrides}
      speedMultiplier={0.9}
    />
  );
}

Loader.propTypes = {
  loading: PropTypes.bool,
};
