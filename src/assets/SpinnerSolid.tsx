import * as React from "react";
import { Svg } from "react-sketchapp";

const SvgSpinnerSolid = (props: any) => (
  <Svg
    aria-hidden="true"
    data-prefix="fas"
    data-icon="spinner"
    className="spinner-solid_svg__svg-inline--fa spinner-solid_svg__fa-spinner spinner-solid_svg__fa-w-16"
    viewBox="0 0 512 512"
    {...props}
  >
    <Svg.Path
      fill={props.fill || "currentColor"}
      d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"
    />
  </Svg>
);

export default SvgSpinnerSolid;
