const styleProps = ({ isCompact, mobileColumnCount }) => ({
  gap: isCompact ? 4 : { mobile: 4, tablet: 8 },
  templateColumns: {
    tablet: "repeat(6, 1fr)",
    desktop: "repeat(12, 1fr)",
    mobile: `repeat(${mobileColumnCount}, 1fr)`,
  },
});

export default styleProps;
