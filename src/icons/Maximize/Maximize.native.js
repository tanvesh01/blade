import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { getThemeColors } from '../../_helpers/theme';
import colors from '../../tokens/colors';

function Maximize({ width, height, fill }) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M15 2C14.4477 2 14 2.44772 14 3C14 3.55228 14.4477 4 15 4H18.5858L13.2929 9.29289C12.9024 9.68342 12.9024 10.3166 13.2929 10.7071C13.6834 11.0976 14.3166 11.0976 14.7071 10.7071L20 5.41421V9C20 9.55228 20.4477 10 21 10C21.5523 10 22 9.55228 22 9V3C22 2.44772 21.5523 2 21 2H15Z"
        fill={fill}
      />
      <Path
        d="M4 15C4 14.4477 3.55228 14 3 14C2.44772 14 2 14.4477 2 15V21C2 21.5523 2.44772 22 3 22H9C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20H5.41421L10.7071 14.7071C11.0976 14.3166 11.0976 13.6834 10.7071 13.2929C10.3166 12.9024 9.68342 12.9024 9.29289 13.2929L4 18.5858V15Z"
        fill={fill}
      />
    </Svg>
  );
}

Maximize.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.oneOf(getThemeColors()),
};

Maximize.defaultProps = {
  width: 24,
  height: 24,
  fill: colors.sapphire[800],
};

export default Maximize;