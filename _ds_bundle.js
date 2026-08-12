/* @ds-bundle: {"format":4,"namespace":"HYSNDesignSystem_e25aa3","components":[{"name":"Select","sourcePath":"components/app/Select.jsx"},{"name":"SidebarNav","sourcePath":"components/app/SidebarNav.jsx"},{"name":"StatTile","sourcePath":"components/app/StatTile.jsx"},{"name":"Switch","sourcePath":"components/app/Switch.jsx"},{"name":"UserChip","sourcePath":"components/app/UserChip.jsx"},{"name":"ContactFooter","sourcePath":"components/brand/ContactFooter.jsx"},{"name":"Eyebrow","sourcePath":"components/brand/Eyebrow.jsx"},{"name":"PageIndicator","sourcePath":"components/brand/PageIndicator.jsx"},{"name":"SectionHeading","sourcePath":"components/brand/SectionHeading.jsx"},{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"IconCircle","sourcePath":"components/core/IconCircle.jsx"},{"name":"Icon","sourcePath":"components/icons/Icon.jsx"},{"name":"BenefitStrip","sourcePath":"components/marketing/BenefitStrip.jsx"},{"name":"ComparisonTable","sourcePath":"components/marketing/ComparisonTable.jsx"},{"name":"DisplayFrame","sourcePath":"components/marketing/DisplayFrame.jsx"},{"name":"FeatureCard","sourcePath":"components/marketing/FeatureCard.jsx"},{"name":"OfferCard","sourcePath":"components/marketing/OfferCard.jsx"},{"name":"PriceBlock","sourcePath":"components/marketing/PriceBlock.jsx"},{"name":"PromoSeal","sourcePath":"components/marketing/PromoSeal.jsx"},{"name":"StepFlow","sourcePath":"components/marketing/StepFlow.jsx"}],"sourceHashes":{"components/app/Select.jsx":"faa653be1a82","components/app/SidebarNav.jsx":"02deb3e6f11e","components/app/StatTile.jsx":"106e33f56747","components/app/Switch.jsx":"99f73f9cbaf3","components/app/UserChip.jsx":"fd2a8270496e","components/brand/ContactFooter.jsx":"63c8a8411aab","components/brand/Eyebrow.jsx":"bad1d9c3dd76","components/brand/PageIndicator.jsx":"e8696f4d4005","components/brand/SectionHeading.jsx":"b4045094ec39","components/brand/Wordmark.jsx":"7e7fd77a4103","components/core/Badge.jsx":"3c7af0949987","components/core/Button.jsx":"57e6646cf318","components/core/Card.jsx":"fd07dbdfbb00","components/core/Divider.jsx":"22f08a61b291","components/core/IconCircle.jsx":"2355f0f72d81","components/icons/Icon.jsx":"0b045eb8457c","components/marketing/BenefitStrip.jsx":"945727841f40","components/marketing/ComparisonTable.jsx":"6733dc66ba3c","components/marketing/DisplayFrame.jsx":"81d9812b8e3f","components/marketing/FeatureCard.jsx":"aceb3b2e3850","components/marketing/OfferCard.jsx":"084f93d58ad5","components/marketing/PriceBlock.jsx":"4d4797262371","components/marketing/PromoSeal.jsx":"b624a5e8c7c3","components/marketing/StepFlow.jsx":"82485988482b","ui_kits/hysn-cms/BoardEditor.jsx":"af465be7105b","ui_kits/hysn-cms/CmsShell.jsx":"9f88731c4cc5","ui_kits/hysn-cms/Dashboard.jsx":"189bc2d969eb","ui_kits/hysn-cms/Media.jsx":"80be84298296","ui_kits/hysn-cms/Schedule.jsx":"60fd558bd332","ui_kits/hysn-flyer/CmsPage.jsx":"25a345d376b7","ui_kits/hysn-flyer/ComparisonPage.jsx":"897a574adb42","ui_kits/hysn-flyer/FlyerChrome.jsx":"c22c91baaebc","ui_kits/hysn-flyer/OfferSheet.jsx":"b93572d66d0c","ui_kits/hysn-website/AktionSection.jsx":"cbddfe6f1c4b","ui_kits/hysn-website/ContactSection.jsx":"826bbc614ed5","ui_kits/hysn-website/FaqSection.jsx":"1ee5cfb3f25a","ui_kits/hysn-website/FeatureMedia.jsx":"4bb7e478d0a7","ui_kits/hysn-website/Features.jsx":"cc054ab49866","ui_kits/hysn-website/Hero.jsx":"32a13f20b081","ui_kits/hysn-website/ReelSection.jsx":"4942fd638979","ui_kits/hysn-website/SiteFooter.jsx":"08261530b8b0","ui_kits/hysn-website/SiteHeader.jsx":"d24120e1ea88","ui_kits/hysn-website/StepBand.jsx":"6795675a47f7","ui_kits/hysn-website/Strips.jsx":"4c7c16de7df8","ui_kits/hysn-website/WarumSection.jsx":"39a960456477"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.HYSNDesignSystem_e25aa3 = window.HYSNDesignSystem_e25aa3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/app/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  checked = false,
  onChange,
  disabled = false,
  label,
  size = 'md',
  style,
  ...rest
}) {
  const w = size === 'sm' ? 36 : 46;
  const h = size === 'sm' ? 20 : 26;
  const knob = h - 6;
  const track = /*#__PURE__*/React.createElement("span", _extends({
    role: "switch",
    "aria-checked": checked,
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: w,
      height: h,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--violet-700)' : 'var(--ink-200)',
      position: 'relative',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      transition: 'background var(--duration-base) var(--ease-standard)',
      ...(!label ? style : null)
    }
  }, !label ? rest : {}), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: checked ? w - knob - 3 : 3,
      width: knob,
      height: knob,
      borderRadius: 'var(--radius-circle)',
      background: 'var(--white)',
      boxShadow: 'var(--shadow-xs)',
      transition: 'left var(--duration-base) var(--ease-out)'
    }
  }));
  if (!label) return track;
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--ink-700)',
      ...style
    }
  }, rest), track, label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/Switch.jsx", error: String((e && e.message) || e) }); }

// components/brand/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Eyebrow({
  children,
  tone = 'violet',
  as: Tag = 'div',
  style,
  ...rest
}) {
  const color = tone === 'violet' ? 'var(--violet-700)' : tone === 'muted' ? 'var(--ink-400)' : 'rgba(255,255,255,.78)';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-eyebrow)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      lineHeight: 1.4,
      color,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/brand/PageIndicator.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PageIndicator({
  current,
  total,
  tone = 'ink',
  showChevron = true,
  style,
  ...rest
}) {
  const color = tone === 'onDark' ? 'var(--white)' : 'var(--ink-900)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      color,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 15,
      fontWeight: 'var(--weight-bold)',
      letterSpacing: '.04em'
    }
  }, current, "/", total), showChevron ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      opacity: .55,
      letterSpacing: '-.06em',
      fontFamily: 'var(--font-body)'
    }
  }, "\xBB") : null);
}
Object.assign(__ds_scope, { PageIndicator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/PageIndicator.jsx", error: String((e && e.message) || e) }); }

// components/brand/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  xl: 'var(--text-display-1)',
  lg: 'var(--text-display-2)',
  md: 'var(--text-display-3)',
  sm: 'var(--text-display-4)',
  xs: 'var(--text-h2)'
};
function SectionHeading({
  children,
  accent,
  size = 'lg',
  tone = 'ink',
  align = 'left',
  as: Tag = 'h2',
  style,
  ...rest
}) {
  const base = tone === 'onDark' ? 'var(--white)' : 'var(--ink-900)';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: SIZES[size],
      fontWeight: 'var(--weight-black)',
      lineHeight: 'var(--leading-display)',
      letterSpacing: 'var(--tracking-display)',
      textTransform: 'uppercase',
      textWrap: 'balance',
      textAlign: align,
      color: base,
      ...style
    }
  }, rest), children, accent ? /*#__PURE__*/React.createElement(React.Fragment, null, ' ', /*#__PURE__*/React.createElement("span", {
    style: {
      color: tone === 'onDark' ? 'var(--violet-300)' : 'var(--violet-700)'
    }
  }, accent)) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/brand/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SRC = {
  violet: 'assets/logo/hysn-wordmark-violet.png',
  gradient: 'assets/logo/hysn-wordmark-gradient.png',
  white: 'assets/logo/hysn-wordmark-white.png',
  ink: 'assets/logo/hysn-wordmark-ink.png'
};
function Wordmark({
  variant = 'gradient',
  height = 34,
  base = '',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: (base ? base.replace(/\/$/, '') + '/' : '') + SRC[variant],
    alt: "HYSN",
    style: {
      height,
      width: 'auto',
      display: 'block',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  children,
  tone = 'brand',
  size = 'md',
  style,
  ...rest
}) {
  const tones = {
    brand: {
      background: 'var(--violet-700)',
      color: 'var(--white)'
    },
    subtle: {
      background: 'var(--violet-100)',
      color: 'var(--violet-800)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--violet-700)',
      boxShadow: 'inset 0 0 0 2px var(--violet-200)'
    },
    positive: {
      background: 'var(--green-100)',
      color: 'var(--green-600)'
    },
    negative: {
      background: 'var(--red-100)',
      color: 'var(--red-600)'
    },
    amber: {
      background: 'var(--amber-500)',
      color: 'var(--ink-900)'
    },
    dark: {
      background: 'var(--ink-900)',
      color: 'var(--white)'
    }
  }[tone];
  const pads = {
    sm: '4px 10px',
    md: '6px 14px'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      padding: pads[size],
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-display)',
      fontSize: size === 'sm' ? 11 : 12.5,
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      ...tones,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PADS = {
  sm: '9px 18px',
  md: '13px 26px',
  lg: '17px 38px'
};
const FONTS = {
  sm: 13,
  md: 15,
  lg: 17
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  iconLeft,
  iconRight,
  fullWidth = false,
  as: Tag = 'button',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const base = {
    primary: {
      background: 'var(--violet-700)',
      color: 'var(--white)',
      border: '2px solid transparent'
    },
    secondary: {
      background: 'var(--white)',
      color: 'var(--violet-700)',
      border: '2px solid var(--violet-200)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--violet-700)',
      border: '2px solid transparent'
    },
    onDark: {
      background: 'var(--white)',
      color: 'var(--ink-900)',
      border: '2px solid transparent'
    }
  }[variant];
  const hoverStyle = !disabled && hover ? {
    primary: {
      background: 'var(--violet-800)'
    },
    secondary: {
      background: 'var(--violet-050)',
      borderColor: 'var(--violet-300)'
    },
    ghost: {
      background: 'var(--violet-050)'
    },
    onDark: {
      background: 'var(--violet-050)'
    }
  }[variant] : null;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    disabled: Tag === 'button' ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-2)',
      padding: PADS[size],
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-display)',
      fontSize: FONTS[size],
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      textDecoration: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .38 : 1,
      transition: 'background var(--duration-base) var(--ease-standard), transform var(--duration-fast) var(--ease-standard), border-color var(--duration-base) var(--ease-standard)',
      transform: press && !disabled ? 'scale(var(--press-scale))' : 'none',
      ...base,
      ...hoverStyle,
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  tone = 'tint',
  padding = 'md',
  radius = 'lg',
  elevated = false,
  style,
  ...rest
}) {
  const tones = {
    tint: {
      background: 'var(--surface-card)',
      border: '1px solid transparent'
    },
    plain: {
      background: 'var(--white)',
      border: '1px solid var(--border-default)'
    },
    outline: {
      background: 'var(--white)',
      border: '2px solid var(--violet-200)'
    },
    brand: {
      background: 'var(--violet-700)',
      border: '1px solid transparent',
      color: 'var(--white)'
    },
    dark: {
      background: 'var(--ink-900)',
      border: '1px solid transparent',
      color: 'var(--white)'
    }
  }[tone];
  const pads = {
    none: 0,
    sm: 'var(--space-4)',
    md: 'var(--space-6)',
    lg: 'var(--space-8)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: `var(--radius-${radius})`,
      padding: pads[padding],
      boxShadow: elevated ? 'var(--shadow-md)' : 'none',
      fontFamily: 'var(--font-body)',
      ...tones,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Divider({
  orientation = 'horizontal',
  tone = 'subtle',
  inset = 0,
  style,
  ...rest
}) {
  const color = {
    subtle: 'var(--border-default)',
    brand: 'var(--violet-200)',
    onDark: 'rgba(255,255,255,.18)'
  }[tone];
  const vertical = orientation === 'vertical';
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "separator",
    style: {
      display: 'block',
      flex: '0 0 auto',
      width: vertical ? 1 : 'auto',
      height: vertical ? 'auto' : 1,
      alignSelf: vertical ? 'stretch' : undefined,
      background: color,
      marginInline: vertical ? 0 : inset,
      marginBlock: vertical ? inset : 0,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/icons/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* HYSN uses a thin, rounded line-icon set. No icon binaries shipped with the
   source material, so this wraps Lucide (nearest match: 1.5–2px rounded stroke).
   The host page must load https://unpkg.com/lucide@latest/dist/umd/lucide.js. */
function Icon({
  name,
  size = 20,
  strokeWidth = 1.75,
  color = 'currentColor',
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const draw = () => {
      if (!window.lucide || !el.isConnected) return;
      el.innerHTML = '';
      const host = document.createElement('i');
      host.setAttribute('data-lucide', name);
      el.appendChild(host);
      window.lucide.createIcons({
        attrs: {
          width: size,
          height: size,
          'stroke-width': strokeWidth,
          stroke: color
        },
        nameAttr: 'data-lucide',
        root: el
      });
    };
    draw();
    if (!window.lucide) {
      const t = setInterval(() => {
        if (window.lucide) {
          clearInterval(t);
          draw();
        }
      }, 60);
      return () => clearInterval(t);
    }
  }, [name, size, strokeWidth, color]);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      flex: '0 0 auto',
      color,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icon.jsx", error: String((e && e.message) || e) }); }

// components/app/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  value,
  options = [],
  onChange,
  label,
  width,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      gap: 6,
      width,
      ...style
    }
  }, rest), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-caption)',
      color: 'var(--ink-500)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: e => onChange && onChange(e.target.value),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      padding: '8px 34px 8px 12px',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--white)',
      color: 'var(--ink-800)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-sm)',
      cursor: 'pointer'
    }
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 10,
      pointerEvents: 'none',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 15,
    color: "var(--ink-400)"
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/Select.jsx", error: String((e && e.message) || e) }); }

// components/app/SidebarNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SidebarNav({
  items = [],
  activeId,
  onSelect,
  brand,
  width = 168,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      width,
      flex: '0 0 auto',
      background: 'var(--ink-900)',
      color: 'var(--white)',
      display: 'flex',
      flexDirection: 'column',
      padding: 'var(--space-4) var(--space-2)',
      gap: 'var(--space-1)',
      fontFamily: 'var(--font-body)',
      minHeight: 0,
      ...style
    }
  }, rest), brand ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--space-3) var(--space-5)'
    }
  }, brand) : null, items.map(it => {
    const active = it.id === activeId;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      onClick: () => onSelect && onSelect(it.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-3)',
        padding: '9px var(--space-3)',
        border: 0,
        cursor: 'pointer',
        borderRadius: 'var(--radius-sm)',
        textAlign: 'left',
        background: active ? 'var(--violet-700)' : 'transparent',
        color: active ? 'var(--white)' : 'rgba(255,255,255,.66)',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-body-sm)',
        fontWeight: active ? 'var(--weight-semibold)' : 'var(--weight-regular)',
        transition: 'background var(--duration-base) var(--ease-standard), color var(--duration-base) var(--ease-standard)'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 16,
      strokeWidth: 1.8
    }), it.label);
  }));
}
Object.assign(__ds_scope, { SidebarNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/SidebarNav.jsx", error: String((e && e.message) || e) }); }

// components/app/StatTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatTile({
  icon,
  value,
  label,
  delta,
  tone = 'tint',
  style,
  ...rest
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: dark ? 'var(--ink-900)' : 'var(--surface-card)',
      color: dark ? 'var(--white)' : 'var(--ink-900)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-4) var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-caption)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: dark ? 'rgba(255,255,255,.66)' : 'var(--ink-500)'
    }
  }, label), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 17,
    color: dark ? 'var(--violet-300)' : 'var(--violet-700)'
  }) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 30,
      fontWeight: 'var(--weight-black)',
      lineHeight: 1
    }
  }, value), delta ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption)',
      color: dark ? 'rgba(255,255,255,.6)' : 'var(--ink-400)'
    }
  }, delta) : null);
}
Object.assign(__ds_scope, { StatTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/StatTile.jsx", error: String((e && e.message) || e) }); }

// components/app/UserChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function UserChip({
  name,
  meta,
  avatar,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 'var(--radius-circle)',
      background: avatar ? `center/cover url(${avatar})` : 'var(--violet-100)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 auto'
    }
  }, avatar ? null : /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "user",
    size: 16,
    color: "var(--violet-700)",
    strokeWidth: 1.9
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1.25
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--ink-800)'
    }
  }, name), meta ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--ink-400)'
    }
  }, meta) : null));
}
Object.assign(__ds_scope, { UserChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/UserChip.jsx", error: String((e && e.message) || e) }); }

// components/brand/ContactFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ContactFooter({
  email = 'info@hysn.de',
  website = 'www.hysn.de',
  phone = '+49 151 44300 333',
  note,
  style,
  ...rest
}) {
  const item = (name, label) => /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: name,
    size: 20,
    color: "var(--violet-700)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body)',
      color: 'var(--ink-700)'
    }
  }, label));
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: 'var(--surface-footer)',
      padding: 'var(--space-5) var(--space-8)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-6)',
      flexWrap: 'wrap'
    }
  }, item('mail', email), item('globe', website), item('phone', phone)), note ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-caption)',
      color: 'var(--ink-400)',
      textAlign: 'center'
    }
  }, note) : null);
}
Object.assign(__ds_scope, { ContactFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/ContactFooter.jsx", error: String((e && e.message) || e) }); }

// components/core/IconCircle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 32,
  md: 44,
  lg: 58
};
function IconCircle({
  name,
  size = 'md',
  tone = 'brand',
  style,
  ...rest
}) {
  const box = SIZES[size];
  const tones = {
    brand: {
      background: 'var(--violet-700)',
      stroke: 'var(--white)'
    },
    subtle: {
      background: 'var(--violet-100)',
      stroke: 'var(--violet-700)'
    },
    outline: {
      background: 'transparent',
      stroke: 'var(--violet-700)',
      ring: '2px solid var(--violet-200)'
    },
    positive: {
      background: 'var(--green-500)',
      stroke: 'var(--white)'
    },
    negative: {
      background: 'var(--red-500)',
      stroke: 'var(--white)'
    }
  }[tone];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      width: box,
      height: box,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-circle)',
      background: tones.background,
      border: tones.ring || '2px solid transparent',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: name,
    size: Math.round(box * 0.48),
    color: tones.stroke,
    strokeWidth: 1.9
  }));
}
Object.assign(__ds_scope, { IconCircle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconCircle.jsx", error: String((e && e.message) || e) }); }

// components/marketing/BenefitStrip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function BenefitStrip({
  items = [],
  title,
  tone = 'plain',
  columns,
  style,
  ...rest
}) {
  const bg = {
    plain: 'transparent',
    tint: 'var(--surface-footer)'
  }[tone];
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      background: bg,
      padding: tone === 'tint' ? 'var(--space-6) var(--space-8)' : 0,
      ...style
    }
  }, rest), title ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h3)',
      fontWeight: 'var(--weight-black)',
      textTransform: 'uppercase',
      color: 'var(--ink-900)',
      textAlign: 'center',
      marginBottom: 'var(--space-5)'
    }
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${columns || items.length}, minmax(0,1fr))`,
      alignItems: 'center'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-3)',
      padding: '0 var(--space-4)',
      textAlign: 'center',
      borderLeft: i === 0 ? 'none' : '1px solid var(--violet-200)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: it.icon,
    size: 30,
    color: "var(--violet-700)",
    strokeWidth: 1.6
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-caption)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--ink-800)',
      lineHeight: 1.35
    }
  }, it.label)))));
}
Object.assign(__ds_scope, { BenefitStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/BenefitStrip.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ComparisonTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Mark({
  ok
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-circle)',
      border: `1.5px solid ${ok ? 'var(--green-500)' : 'var(--red-500)'}`,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: ok ? 'check' : 'x',
    size: 11,
    strokeWidth: 2.4,
    color: ok ? 'var(--green-500)' : 'var(--red-500)'
  }));
}
function ComparisonTable({
  leftLabel,
  rightLabel,
  rows = [],
  style,
  ...rest
}) {
  const cell = {
    padding: 'var(--space-3) var(--space-4)',
    display: 'flex',
    gap: 'var(--space-3)',
    alignItems: 'flex-start'
  };
  const text = {
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-body-sm)',
    lineHeight: 'var(--leading-tight)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      border: '1px solid var(--blue-500)',
      borderRadius: 'var(--radius-xs)',
      overflow: 'hidden',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      background: 'var(--blue-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...cell,
      ...text,
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--ink-900)'
    }
  }, leftLabel), /*#__PURE__*/React.createElement("div", {
    style: {
      ...cell,
      ...text,
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--ink-900)',
      borderLeft: '1px solid var(--blue-500)'
    }
  }, rightLabel)), rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      borderTop: '1px dashed var(--blue-500)',
      background: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...cell
    }
  }, /*#__PURE__*/React.createElement(Mark, {
    ok: true
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...text,
      color: 'var(--ink-700)'
    }
  }, r.pro)), /*#__PURE__*/React.createElement("div", {
    style: {
      ...cell,
      borderLeft: '1px dashed var(--blue-500)'
    }
  }, /*#__PURE__*/React.createElement(Mark, {
    ok: false
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...text,
      color: 'var(--ink-400)'
    }
  }, r.con)))));
}
Object.assign(__ds_scope, { ComparisonTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ComparisonTable.jsx", error: String((e && e.message) || e) }); }

// components/marketing/DisplayFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const RATIOS = {
  '16:9': '16 / 9',
  '32:9': '32 / 9',
  '9:16': '9 / 16',
  '4:5': '4 / 5'
};
function DisplayFrame({
  children,
  ratio = '16:9',
  bezel = 10,
  mounted,
  shadow = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      ...style
    }
  }, rest), mounted === 'ceiling' ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 26,
      background: 'var(--ink-800)',
      borderRadius: '2px 2px 0 0'
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink-900)',
      padding: bezel,
      borderRadius: 4,
      boxShadow: shadow ? 'var(--shadow-screen)' : 'none',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: RATIOS[ratio],
      background: 'var(--ink-800)',
      overflow: 'hidden',
      position: 'relative'
    }
  }, children)));
}
Object.assign(__ds_scope, { DisplayFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/DisplayFrame.jsx", error: String((e && e.message) || e) }); }

// components/marketing/FeatureCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function FeatureCard({
  n,
  title,
  children,
  media,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    "data-ftcell": true,
    style: {
      background: 'var(--white)',
      padding: '26px 26px 24px',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--font-body)',
      transition: 'background .35s var(--ease-standard)',
      ...style
    }
  }, rest), n != null ? /*#__PURE__*/React.createElement("div", {
    "data-num": true,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 13,
      letterSpacing: '.12em',
      color: 'var(--violet-400)',
      transition: 'color .35s var(--ease-standard)'
    }
  }, String(n).padStart(2, '0'), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 1.5,
      background: 'var(--violet-200)',
      transition: 'background .35s var(--ease-standard)'
    }
  })) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 15,
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--ink-900)',
      lineHeight: 1.35,
      margin: n != null ? '12px 0 6px' : '0 0 6px'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: 1.55,
      color: 'var(--ink-500)',
      textWrap: 'pretty',
      marginBottom: media ? 20 : 0
    }
  }, children), media ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, media) : null);
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/OfferCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function OfferCard({
  headline,
  children,
  media,
  seal = 'gift',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      border: '2px solid var(--violet-300)',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--white)',
      padding: 'var(--space-5) var(--space-5) var(--space-7)',
      textAlign: 'center',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h3)',
      fontWeight: 'var(--weight-black)',
      textTransform: 'uppercase',
      color: 'var(--violet-700)',
      lineHeight: 'var(--leading-heading)'
    }
  }, headline), children ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: 'var(--text-body-sm)',
      lineHeight: 'var(--leading-tight)',
      color: 'var(--ink-700)'
    }
  }, children) : null, media ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)'
    }
  }, media) : null, seal ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '50%',
      bottom: -19,
      transform: 'translateX(-50%)',
      width: 38,
      height: 38,
      borderRadius: 'var(--radius-circle)',
      background: 'var(--violet-700)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: seal,
    size: 19,
    color: "var(--white)",
    strokeWidth: 1.9
  })) : null);
}
Object.assign(__ds_scope, { OfferCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/OfferCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/PriceBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PriceBlock({
  price,
  was,
  note,
  size = 'lg',
  align = 'left',
  style,
  ...rest
}) {
  const big = {
    lg: 56,
    md: 40,
    sm: 30
  }[size];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: big,
      fontWeight: 'var(--weight-black)',
      letterSpacing: '-.01em',
      lineHeight: 1,
      color: 'var(--violet-700)'
    }
  }, price), was ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: Math.round(big * 0.42),
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--ink-400)'
    }
  }, "Statt ", /*#__PURE__*/React.createElement("span", {
    style: {
      textDecoration: 'line-through'
    }
  }, was)) : null, note ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-caption)',
      color: 'var(--ink-400)'
    }
  }, note) : null);
}
Object.assign(__ds_scope, { PriceBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/PriceBlock.jsx", error: String((e && e.message) || e) }); }

// components/marketing/PromoSeal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PromoSeal({
  label,
  value,
  sub,
  size = 128,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      width: size,
      height: size,
      borderRadius: 'var(--radius-circle)',
      background: 'var(--violet-700)',
      color: 'var(--white)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      fontFamily: 'var(--font-display)',
      lineHeight: 1.12,
      padding: size * 0.12,
      boxSizing: 'border-box',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 'var(--radius-circle)',
      background: 'radial-gradient(58% 58% at 32% 22%, rgba(255,255,255,.22) 0%, rgba(255,255,255,0) 62%)',
      pointerEvents: 'none'
    }
  }), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: size * 0.078,
      fontWeight: 'var(--weight-bold)',
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      opacity: .85
    }
  }, label) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: size * 0.24,
      fontWeight: 'var(--weight-black)',
      letterSpacing: '-.02em',
      margin: `${size * 0.008}px 0`
    }
  }, value), sub ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: size * 0.105,
      fontWeight: 'var(--weight-black)',
      letterSpacing: '.14em',
      textIndent: '.14em',
      textTransform: 'uppercase',
      color: 'var(--amber-500)'
    }
  }, sub) : null);
}
Object.assign(__ds_scope, { PromoSeal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/PromoSeal.jsx", error: String((e && e.message) || e) }); }

// components/marketing/StepFlow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StepFlow({
  steps = [],
  accentLast = true,
  tone = 'tint',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: tone === 'tint' ? 'var(--surface-footer)' : 'transparent',
      padding: tone === 'tint' ? 'var(--space-6) var(--space-8)' : 0,
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-3)',
      flexWrap: 'wrap'
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h2)',
      fontWeight: 'var(--weight-black)',
      textTransform: 'uppercase',
      letterSpacing: '-.005em',
      color: accentLast && i === steps.length - 1 ? 'var(--violet-700)' : 'var(--ink-900)'
    }
  }, s, "."))), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 34,
    color: "var(--violet-700)",
    strokeWidth: 2.2
  }));
}
Object.assign(__ds_scope, { StepFlow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/StepFlow.jsx", error: String((e && e.message) || e) }); }

// ui_kits/hysn-cms/BoardEditor.jsx
try { (() => {
const {
  Card,
  Button,
  Switch,
  Badge,
  Icon,
  DisplayFrame,
  Divider,
  Select
} = window.HYSNDesignSystem_e25aa3;
const ITEMS = [{
  name: 'Cheese Burger',
  price: '12,90 €'
}, {
  name: 'Crispy Chicken Burger',
  price: '11,50 €'
}, {
  name: 'Pommes klein',
  price: '3,20 €'
}, {
  name: 'Softdrink 0,4l',
  price: '3,90 €'
}];
function BoardEditor({
  onPublish
}) {
  const [aktion, setAktion] = React.useState(true);
  const [sel, setSel] = React.useState(0);
  const [playlist, setPlaylist] = React.useState('mittag');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageTitle, {
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: onPublish,
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "upload-cloud",
        size: 16
      })
    }, "Ver\xF6ffentlichen")
  }, "Men\xFCboard bearbeiten"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.15fr',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Playlist",
    value: playlist,
    onChange: setPlaylist,
    options: [{
      value: 'frueh',
      label: 'Frühstückskarte'
    }, {
      value: 'mittag',
      label: 'Mittagskarte'
    }, {
      value: 'abend',
      label: 'Abendkarte'
    }]
  }), /*#__PURE__*/React.createElement(Card, {
    tone: "plain",
    padding: "none",
    radius: "md"
  }, ITEMS.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: it.name,
    onClick: () => setSel(i),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      cursor: 'pointer',
      padding: 'var(--space-4) var(--space-5)',
      borderTop: i ? '1px solid var(--border-default)' : 'none',
      background: sel === i ? 'var(--violet-050)' : 'transparent',
      boxShadow: sel === i ? 'inset 3px 0 0 var(--violet-700)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 34,
      borderRadius: 'var(--radius-xs)',
      overflow: 'hidden',
      flex: '0 0 auto',
      background: 'var(--ink-100)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/flyer-cms-menuboard.jpeg",
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: '82% 12%'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 'var(--text-body-sm)',
      fontWeight: 500
    }
  }, it.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-body-sm)'
    }
  }, it.price), /*#__PURE__*/React.createElement(Icon, {
    name: "pencil",
    size: 15,
    color: "var(--ink-400)"
  })))), /*#__PURE__*/React.createElement(Card, {
    tone: "tint",
    padding: "md",
    radius: "md",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-h4)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)'
    }
  }, "Aktion"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-body-sm)',
      color: 'var(--ink-500)'
    }
  }, "2 f\xFCr 1 Burger")), /*#__PURE__*/React.createElement(Switch, {
    checked: aktion,
    onChange: setAktion
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "image",
      size: 15
    })
  }, "Bild \xE4ndern"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "Vorschau zur\xFCcksetzen"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(DisplayFrame, {
    ratio: "16:9",
    bezel: 9,
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--ink-900)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: 22,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 34,
      lineHeight: 1.02,
      textTransform: 'uppercase',
      color: '#fff'
    }
  }, ITEMS[sel].name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 40,
      color: 'var(--amber-500)',
      lineHeight: 1
    }
  }, ITEMS[sel].price), aktion ? /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "amber"
  }, "2 f\xFCr 1 Aktion")) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '46%'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/flyer-cms-menuboard.jpeg",
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: '82% 12%'
    }
  })))), /*#__PURE__*/React.createElement(Card, {
    tone: "plain",
    padding: "md",
    radius: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-h4)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      marginBottom: 'var(--space-4)'
    }
  }, "Zieht auf"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, ['Menüboard links', 'Menüboard Mitte', 'Menüboard rechts'].map(n => /*#__PURE__*/React.createElement("label", {
    key: n,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--ink-700)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    defaultChecked: true,
    style: {
      accentColor: 'var(--violet-700)',
      width: 15,
      height: 15
    }
  }), n))), /*#__PURE__*/React.createElement(Divider, {
    style: {
      margin: 'var(--space-4) 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--ink-400)'
    }
  }, "\xC4nderungen erscheinen in wenigen Sekunden auf allen gew\xE4hlten Bildschirmen.")))));
}
Object.assign(window, {
  BoardEditor
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hysn-cms/BoardEditor.jsx", error: String((e && e.message) || e) }); }

// ui_kits/hysn-cms/CmsShell.jsx
try { (() => {
const {
  SidebarNav,
  Select,
  UserChip,
  Wordmark,
  Icon
} = window.HYSNDesignSystem_e25aa3;
const NAV = [{
  id: 'dashboard',
  label: 'Dashboard',
  icon: 'layout-dashboard'
}, {
  id: 'inhalte',
  label: 'Inhalte',
  icon: 'file-text'
}, {
  id: 'playlists',
  label: 'Playlists',
  icon: 'list-music'
}, {
  id: 'bildschirme',
  label: 'Bildschirme',
  icon: 'monitor'
}, {
  id: 'zeitplaene',
  label: 'Zeitpläne',
  icon: 'calendar-clock'
}, {
  id: 'medien',
  label: 'Medien',
  icon: 'image'
}, {
  id: 'standorte',
  label: 'Standorte',
  icon: 'map-pin'
}, {
  id: 'einstellungen',
  label: 'Einstellungen',
  icon: 'settings'
}];
function CmsShell({
  view,
  onView,
  location,
  onLocation,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1180,
      height: 740,
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--white)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 20px',
      borderBottom: '1px solid var(--border-default)',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    variant: "gradient",
    height: 18,
    base: "../.."
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      color: 'var(--ink-400)'
    }
  }, "CMS")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Select, {
    value: location,
    onChange: onLocation,
    width: 190,
    options: [{
      value: 'f1',
      label: 'Standort: Filiale 1'
    }, {
      value: 'f2',
      label: 'Standort: Filiale 2'
    }, {
      value: 'f3',
      label: 'Standort: Filiale 3'
    }]
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 19,
    color: "var(--ink-400)"
  }), /*#__PURE__*/React.createElement(UserChip, {
    name: "HYSN User",
    meta: "Administrator"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(SidebarNav, {
    items: NAV,
    activeId: view,
    onSelect: onView,
    width: 186,
    style: {
      borderRadius: 0
    }
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflow: 'auto',
      background: 'var(--surface-page-alt)',
      padding: 'var(--space-7)'
    }
  }, children)));
}
function PageTitle({
  children,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 'var(--space-5)',
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h1)',
      fontWeight: 900,
      textTransform: 'uppercase',
      letterSpacing: '-.005em',
      lineHeight: 1.1
    }
  }, children), action);
}
Object.assign(window, {
  CmsShell,
  PageTitle,
  NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hysn-cms/CmsShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/hysn-cms/Dashboard.jsx
try { (() => {
const {
  StatTile,
  Card,
  Badge,
  Button,
  Icon,
  DisplayFrame,
  Divider
} = window.HYSNDesignSystem_e25aa3;
const SCREENS = [{
  name: 'Menüboard links',
  place: 'Filiale 1 · Theke',
  playlist: 'Mittagskarte',
  on: true
}, {
  name: 'Menüboard Mitte',
  place: 'Filiale 1 · Theke',
  playlist: 'Mittagskarte',
  on: true
}, {
  name: 'Menüboard rechts',
  place: 'Filiale 1 · Theke',
  playlist: 'Aktion 2 für 1',
  on: true
}, {
  name: 'Bar Display',
  place: 'Filiale 1 · Kasse',
  playlist: 'Getränke',
  on: true
}, {
  name: 'Schaufenster Totem',
  place: 'Filiale 1 · Eingang',
  playlist: 'Tagesangebot',
  on: false
}];
function Dashboard({
  onEdit
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageTitle, {
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "plus",
        size: 15
      }),
      onClick: onEdit
    }, "Men\xFCboard bearbeiten")
  }, "Dashboard"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    icon: "monitor",
    label: "Bildschirme online",
    value: "4/5",
    delta: "1 Ger\xE4t offline"
  }), /*#__PURE__*/React.createElement(StatTile, {
    icon: "list-music",
    label: "Aktive Playlists",
    value: "4",
    delta: "Fr\xFChst\xFCck, Mittag, Abend, Aktion"
  }), /*#__PURE__*/React.createElement(StatTile, {
    icon: "calendar-clock",
    label: "Geplante Aktionen",
    value: "2",
    delta: "n\xE4chste: Fr 06.08."
  }), /*#__PURE__*/React.createElement(StatTile, {
    icon: "map-pin",
    label: "Standorte",
    value: "3",
    delta: "alle synchronisiert",
    tone: "dark"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "plain",
    padding: "none",
    radius: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4) var(--space-5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h4)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)'
    }
  }, "Bildschirme"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--ink-400)'
    }
  }, "zuletzt aktualisiert vor 2 Min.")), /*#__PURE__*/React.createElement(Divider, null), SCREENS.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.name,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      padding: 'var(--space-4) var(--space-5)',
      borderTop: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "monitor",
    size: 18,
    color: s.on ? 'var(--violet-700)' : 'var(--ink-300)'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-body-sm)',
      fontWeight: 500,
      color: 'var(--ink-900)'
    }
  }, s.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--ink-400)'
    }
  }, s.place)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--ink-500)'
    }
  }, s.playlist), /*#__PURE__*/React.createElement(Badge, {
    tone: s.on ? 'positive' : 'negative',
    size: "sm"
  }, s.on ? 'Online' : 'Offline')))), /*#__PURE__*/React.createElement(Card, {
    tone: "plain",
    padding: "md",
    radius: "md",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h4)',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)'
    }
  }, "Live-Vorschau"), /*#__PURE__*/React.createElement(DisplayFrame, {
    ratio: "16:9",
    bezel: 7,
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/flyer-cms-menuboard.jpeg",
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: '76% 33%'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-body-sm)',
      color: 'var(--ink-500)',
      lineHeight: 'var(--leading-body)'
    }
  }, "Men\xFCboard Mitte \xB7 Playlist ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--ink-900)'
    }
  }, "Mittagskarte")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    fullWidth: true,
    onClick: onEdit
  }, "Inhalt \xF6ffnen"))));
}
Object.assign(window, {
  Dashboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hysn-cms/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/hysn-cms/Media.jsx
try { (() => {
const {
  Card,
  Button,
  Icon,
  Badge
} = window.HYSNDesignSystem_e25aa3;
const TILES = [['Cheese Burger', 'JPG · 2400×1600', '82% 12%'], ['Crispy Chicken', 'JPG · 2400×1600', '78% 52%'], ['Smoothie Board', 'MP4 · 12 s', '30% 20%'], ['Bar Display Loop', 'MP4 · 8 s', '50% 72%'], ['Filiale Aussen', 'JPG · 1800×1200', '50% 8%'], ['Vergleich LCD', 'PNG · 1600×1000', '50% 78%']];
const SRC = ['../../assets/imagery/flyer-cms-menuboard.jpeg', '../../assets/imagery/flyer-menuboard-aktion.jpeg', '../../assets/imagery/flyer-vergleich-lcd.jpeg'];
function Media() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageTitle, {
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "upload",
        size: 15
      })
    }, "Medien hochladen")
  }, "Medien"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-4)'
    }
  }, TILES.map(([name, meta, pos], i) => /*#__PURE__*/React.createElement(Card, {
    key: name,
    tone: "plain",
    padding: "none",
    radius: "md",
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 118,
      background: 'var(--ink-100)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: SRC[i % 3],
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: pos
    }
  }), meta.startsWith('MP4') ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(17,17,17,.32)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "play",
    size: 26,
    color: "#fff",
    strokeWidth: 2
  })) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-3) var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-body-sm)',
      fontWeight: 500
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--ink-400)'
    }
  }, meta)))), /*#__PURE__*/React.createElement(Card, {
    tone: "outline",
    padding: "md",
    radius: "md",
    style: {
      minHeight: 172,
      border: '2px dashed var(--violet-300)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-3)',
      color: 'var(--violet-700)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "image-plus",
    size: 26,
    color: "var(--violet-700)",
    strokeWidth: 1.6
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      textAlign: 'center'
    }
  }, "Datei hierher ziehen"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)',
      display: 'flex',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "subtle",
    size: "sm"
  }, "6 Dateien"), /*#__PURE__*/React.createElement(Badge, {
    tone: "subtle",
    size: "sm"
  }, "1,2 GB von 5 GB")));
}
Object.assign(window, {
  Media
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hysn-cms/Media.jsx", error: String((e && e.message) || e) }); }

// ui_kits/hysn-cms/Schedule.jsx
try { (() => {
const {
  Card,
  Badge,
  Button,
  Icon,
  Switch
} = window.HYSNDesignSystem_e25aa3;
const DAYS = ['MO', 'DI', 'MI', 'DO', 'FR', 'SA', 'SO'];
const BANDS = [{
  label: 'Frühstückskarte',
  from: '09:00',
  to: '11:00',
  start: 0,
  span: 2,
  tone: 'subtle'
}, {
  label: 'Mittagskarte',
  from: '11:00',
  to: '16:00',
  start: 2,
  span: 5,
  tone: 'brand'
}, {
  label: 'Abendkarte',
  from: '16:00',
  to: '22:00',
  start: 7,
  span: 6,
  tone: 'dark'
}];
const HOURS = ['09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22'];
function Schedule() {
  const [aktion, setAktion] = React.useState(true);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageTitle, {
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "plus",
        size: 15
      })
    }, "Zeitplan hinzuf\xFCgen")
  }, "Zeitpl\xE4ne"), /*#__PURE__*/React.createElement(Card, {
    tone: "plain",
    padding: "md",
    radius: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${HOURS.length},1fr)`,
      gap: 2,
      fontSize: 'var(--text-caption)',
      color: 'var(--ink-400)',
      marginBottom: 6
    }
  }, HOURS.map(h => /*#__PURE__*/React.createElement("span", {
    key: h,
    style: {
      textAlign: 'center'
    }
  }, h))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, BANDS.map(b => {
    const bg = b.tone === 'brand' ? 'var(--violet-700)' : b.tone === 'dark' ? 'var(--ink-900)' : 'var(--violet-200)';
    const fg = b.tone === 'subtle' ? 'var(--violet-800)' : 'var(--white)';
    return /*#__PURE__*/React.createElement("div", {
      key: b.label,
      style: {
        display: 'grid',
        gridTemplateColumns: `repeat(${HOURS.length},1fr)`,
        gap: 2
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        gridColumn: `${b.start + 1} / span ${b.span}`,
        background: bg,
        color: fg,
        borderRadius: 'var(--radius-sm)',
        padding: '10px 14px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'var(--space-3)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 'var(--text-body-sm)',
        textTransform: 'uppercase',
        letterSpacing: 'var(--tracking-label)'
      }
    }, b.label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-caption)',
        opacity: .85
      }
    }, b.from, "\u2013", b.to)));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "plain",
    padding: "md",
    radius: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-h4)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      marginBottom: 'var(--space-4)'
    }
  }, "Woche"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7,1fr)',
      gap: 4
    }
  }, DAYS.map(d => /*#__PURE__*/React.createElement("div", {
    key: d,
    style: {
      textAlign: 'center',
      fontSize: 'var(--text-caption)',
      color: 'var(--ink-400)',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      letterSpacing: '.08em'
    }
  }, d)), DAYS.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: d + i,
    style: {
      height: 46,
      borderRadius: 'var(--radius-xs)',
      background: i > 3 ? 'var(--violet-050)' : 'var(--ink-050)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand",
    size: "sm"
  }, "2 f\xFCr 1 Burger Aktion \xB7 Fr \u2013 So"))), /*#__PURE__*/React.createElement(Card, {
    tone: "tint",
    padding: "md",
    radius: "md",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-h4)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)'
    }
  }, "Automatik"), /*#__PURE__*/React.createElement(Switch, {
    checked: aktion,
    onChange: setAktion,
    label: "Tageszeiten automatisch wechseln"
  }), /*#__PURE__*/React.createElement(Switch, {
    checked: true,
    onChange: () => {},
    label: "Aktion am Wochenende einblenden"
  }), /*#__PURE__*/React.createElement(Switch, {
    checked: false,
    onChange: () => {},
    label: "Feiertagskarte verwenden"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--ink-500)',
      lineHeight: 'var(--leading-body)'
    }
  }, "Gilt f\xFCr alle Bildschirme an diesem Standort. Einzelne Bildschirme k\xF6nnen abweichende Zeitpl\xE4ne erhalten."))));
}
Object.assign(window, {
  Schedule
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hysn-cms/Schedule.jsx", error: String((e && e.message) || e) }); }

// ui_kits/hysn-flyer/CmsPage.jsx
try { (() => {
const {
  SectionHeading,
  FeatureCard,
  BenefitStrip,
  StepFlow,
  DisplayFrame,
  Icon,
  Badge,
  Switch
} = window.HYSNDesignSystem_e25aa3;
function MiniCms() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--white)',
      borderRadius: 6,
      boxShadow: 'var(--shadow-md)',
      overflow: 'hidden',
      width: 300,
      fontSize: 9
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '5px 8px',
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      letterSpacing: '.18em',
      fontSize: 7
    }
  }, "HYSN CMS"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-400)'
    }
  }, "Standort: Filiale 1")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      background: 'var(--ink-900)',
      padding: 5,
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, ['Dashboard', 'Inhalte', 'Playlists', 'Bildschirme', 'Zeitpläne', 'Medien'].map((l, i) => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      color: i === 0 ? '#fff' : 'rgba(255,255,255,.55)',
      background: i === 0 ? 'var(--violet-700)' : 'transparent',
      borderRadius: 3,
      padding: '2px 4px',
      fontSize: 6.5
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: 8,
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 8,
      textTransform: 'uppercase'
    }
  }, "Men\xFCboard bearbeiten"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--violet-050)',
      borderRadius: 4,
      padding: 6,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 8
    }
  }, "CHEESE BURGER"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9
    }
  }, "12,90 \u20AC")), /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--violet-700)',
      color: '#fff',
      borderRadius: 3,
      padding: '2px 5px',
      fontSize: 6.5
    }
  }, "Bild \xE4ndern")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--violet-050)',
      borderRadius: 4,
      padding: 6,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 8
    }
  }, "AKTION"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 7,
      color: 'var(--ink-500)'
    }
  }, "2 f\xFCr 1 Burger")), /*#__PURE__*/React.createElement(Switch, {
    checked: true,
    size: "sm"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      alignSelf: 'center',
      background: 'var(--violet-700)',
      color: '#fff',
      borderRadius: 4,
      padding: '3px 12px',
      fontSize: 7
    }
  }, "Ver\xF6ffentlichen"))));
}
function DaypartRow() {
  const parts = [['sun', 'Frühstück', '09:00 – 11:00'], ['sunset', 'Mittag', '11:00 – 16:00'], ['moon', 'Abend', '16:00 – 22:00']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, parts.map(([ic, n, t], i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: n
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: 'var(--white)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-sm)',
      padding: '8px 6px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 18,
    color: "var(--violet-700)",
    strokeWidth: 1.7
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 9.5,
      textTransform: 'uppercase',
      letterSpacing: '.06em',
      marginTop: 4
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 8.5,
      color: 'var(--ink-400)'
    }
  }, t)), i < 2 ? /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 14,
    color: "var(--violet-400)"
  }) : null)));
}
function CmsPage() {
  return /*#__PURE__*/React.createElement(FlyerPage, {
    page: 3,
    total: 3
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '26px 40px 0',
      display: 'flex',
      gap: 'var(--space-6)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    size: "sm",
    accent: "einfach zu verwalten."
  }, "Ihre Speisekarte war noch nie so"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-body)',
      color: 'var(--ink-500)',
      lineHeight: 'var(--leading-body)'
    }
  }, "\xC4nderungen in wenigen Sekunden \u2013", /*#__PURE__*/React.createElement("br", null), "auf allen Bildschirmen gleichzeitig.")), /*#__PURE__*/React.createElement(MiniCms, null)), /*#__PURE__*/React.createElement(StepFlow, {
    steps: ['Ändern', 'Speichern', 'Fertig'],
    style: {
      margin: '26px 0 0',
      padding: '18px 40px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '26px 40px 0',
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(FeatureCard, {
    icon: "utensils",
    title: "Speisekarte \xE4ndern"
  }, "Preise, Gerichte oder Bilder jederzeit selbst anpassen."), /*#__PURE__*/React.createElement(FeatureCard, {
    icon: "clock",
    title: "Automatische Tageszeiten",
    media: /*#__PURE__*/React.createElement(DaypartRow, null)
  }, "Fr\xFChst\xFCck, Mittag- und Abendkarte wechseln automatisch."), /*#__PURE__*/React.createElement(FeatureCard, {
    icon: "play",
    title: "Videos & Animationen",
    media: /*#__PURE__*/React.createElement(DisplayFrame, {
      ratio: "16:9",
      bezel: 4,
      shadow: false
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/imagery/flyer-cms-menuboard.jpeg",
      alt: "",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: '78% 52%'
      }
    }))
  }, "Videos, GIFs und moderne Animationen sorgen f\xFCr mehr Aufmerksamkeit."), /*#__PURE__*/React.createElement(FeatureCard, {
    icon: "calendar",
    title: "Aktionen planen",
    media: /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--white)',
        border: '1px solid var(--border-default)',
        borderRadius: 'var(--radius-sm)',
        padding: 6
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(7,1fr)',
        fontSize: 8,
        color: 'var(--ink-400)',
        textAlign: 'center'
      }
    }, ['MO', 'DI', 'MI', 'DO', 'FR', 'SA', 'SO'].map(d => /*#__PURE__*/React.createElement("span", {
      key: d
    }, d))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 5
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "brand",
      size: "sm",
      style: {
        width: '100%',
        justifyContent: 'center'
      }
    }, "2 f\xFCr 1 Burger Aktion")))
  }, "Plane Angebote heute f\xFCr n\xE4chste Woche oder den ganzen Monat."), /*#__PURE__*/React.createElement(FeatureCard, {
    icon: "cloud",
    title: "Alles online steuern",
    media: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        gap: 10
      }
    }, [['laptop', 30], ['tablet', 24], ['smartphone', 18]].map(([n, s]) => /*#__PURE__*/React.createElement(Icon, {
      key: n,
      name: n,
      size: s,
      color: "var(--ink-800)",
      strokeWidth: 1.5
    })))
  }, "\xC4nderungen von \xFCberall aus \u2013 Laptop, Tablet oder Smartphone."), /*#__PURE__*/React.createElement(FeatureCard, {
    icon: "map-pin",
    title: "Mehrere Standorte verwalten",
    media: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-around'
      }
    }, ['Filiale 1', 'Filiale 2', 'Filiale 3'].map(n => /*#__PURE__*/React.createElement("div", {
      key: n,
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "store",
      size: 20,
      color: "var(--ink-800)",
      strokeWidth: 1.5
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 7.5,
        color: 'var(--ink-500)',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        letterSpacing: '.08em',
        textTransform: 'uppercase'
      }
    }, n))))
  }, "Alle Filialen zentral verwalten oder jede einzeln steuern.")), /*#__PURE__*/React.createElement(BenefitStrip, {
    title: "Ideal f\xFCr",
    style: {
      padding: '30px 40px 20px'
    },
    items: [{
      icon: 'utensils',
      label: 'Restaurants'
    }, {
      icon: 'beef',
      label: 'Dönerläden'
    }, {
      icon: 'croissant',
      label: 'Bäckereien'
    }, {
      icon: 'coffee',
      label: 'Cafés'
    }, {
      icon: 'ice-cream-cone',
      label: 'Eisdielen'
    }, {
      icon: 'pizza',
      label: 'Pizzerien'
    }, {
      icon: 'flame',
      label: 'Grillhäuser'
    }]
  }), /*#__PURE__*/React.createElement(BenefitStrip, {
    tone: "tint",
    title: "Ihre Vorteile auf einen Blick",
    style: {
      marginTop: 'var(--space-5)'
    },
    items: [{
      icon: 'usb',
      label: 'Keine USB-Sticks mehr'
    }, {
      icon: 'timer',
      label: 'Änderungen in Sekunden'
    }, {
      icon: 'printer',
      label: 'Keine Druckkosten'
    }, {
      icon: 'monitor-check',
      label: 'Einheitliches Erscheinungsbild'
    }, {
      icon: 'clock',
      label: 'Zeit sparen'
    }, {
      icon: 'star',
      label: 'Professioneller Auftritt'
    }]
  }));
}
Object.assign(window, {
  CmsPage,
  MiniCms
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hysn-flyer/CmsPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/hysn-flyer/ComparisonPage.jsx
try { (() => {
const {
  SectionHeading,
  ComparisonTable,
  DisplayFrame
} = window.HYSNDesignSystem_e25aa3;
const ROWS = [{
  pro: 'Dauerbetrieb 24 Std/Tag',
  con: 'Kurzzeitbetrieb: 4–8 Std/Tag'
}, {
  pro: 'Brandschutzvorgaben erfüllt, Zulassung garantiert',
  con: 'Brandschutzvorgabe nicht erfüllt, Sicherheitsrisiko'
}, {
  pro: 'hohe Leuchtstärke',
  con: 'geringe Leuchtstärke'
}, {
  pro: 'Einbrennschutz',
  con: 'kein Einbrennschutz'
}, {
  pro: '36 Monate Garantie ab Werk, verlängerbar auf 60 Monate',
  con: 'Garantieverlust (Laufzeiten werden ausgelesen)'
}, {
  pro: 'Fernwartung möglich',
  con: 'Keine Fernwartung möglich'
}, {
  pro: 'Quer- und Hochformat',
  con: 'Ausschließlich Querformat'
}, {
  pro: 'High Brightness',
  con: 'Eingeschränkte Helligkeit'
}, {
  pro: 'Ansprechpartner vor Ort',
  con: 'Kein Ansprechpartner vor Ort'
}];
const SIZES = [{
  label: '32”',
  ratio: '9:16',
  pos: '50% 50%'
}, {
  label: '65”',
  ratio: '16:9',
  pos: '50% 50%'
}, {
  label: '55”',
  ratio: '16:9',
  pos: '50% 50%'
}];
function ComparisonPage() {
  return /*#__PURE__*/React.createElement(FlyerPage, {
    page: 2,
    total: 3
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '30px 40px 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    size: "sm"
  }, "Warum HYSN Digital Men\xFCboards?"), /*#__PURE__*/React.createElement(ComparisonTable, {
    leftLabel: "HYSN Digital Men\xFCboard",
    rightLabel: "LCD \u2013 TV",
    rows: ROWS
  }), /*#__PURE__*/React.createElement(SectionHeading, {
    size: "sm",
    as: "h3"
  }, "Weitere Gr\xF6ssen auf Anfrage"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-6)',
      alignItems: 'end',
      paddingBottom: 'var(--space-8)'
    }
  }, SIZES.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.label,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(DisplayFrame, {
    ratio: s.ratio,
    bezel: 6,
    shadow: false,
    style: {
      width: s.ratio === '9:16' ? '58%' : '100%'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/flyer-vergleich-lcd.jpeg",
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: s.pos
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--ink-500)'
    }
  }, s.label))))));
}
Object.assign(window, {
  ComparisonPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hysn-flyer/ComparisonPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/hysn-flyer/FlyerChrome.jsx
try { (() => {
const {
  Wordmark,
  PageIndicator,
  ContactFooter
} = window.HYSNDesignSystem_e25aa3;
function FlyerTop({
  page,
  total
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '26px 40px 0'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    variant: "gradient",
    height: 26,
    base: "../.."
  }), /*#__PURE__*/React.createElement(PageIndicator, {
    current: page,
    total: total,
    showChevron: page < total
  }));
}
function FlyerPage({
  page,
  total,
  children,
  footerNote
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 820,
      background: 'var(--white)',
      boxShadow: 'var(--shadow-lg)',
      display: 'flex',
      flexDirection: 'column',
      minHeight: 1120,
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement(FlyerTop, {
    page: page,
    total: total
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    }
  }, children), /*#__PURE__*/React.createElement(ContactFooter, {
    note: footerNote
  }));
}
Object.assign(window, {
  FlyerTop,
  FlyerPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hysn-flyer/FlyerChrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/hysn-flyer/OfferSheet.jsx
try { (() => {
const {
  Eyebrow,
  SectionHeading,
  PriceBlock,
  OfferCard,
  PromoSeal,
  BenefitStrip,
  DisplayFrame,
  Icon
} = window.HYSNDesignSystem_e25aa3;
function OfferSheet() {
  return /*#__PURE__*/React.createElement(FlyerPage, {
    page: 1,
    total: 3,
    footerNote: "* Montage im Umkreis von 50km inklusive. Angebot g\xFCltig bis 31.08.2026. Alle Preise zzgl. MwSt."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 340,
      overflow: 'hidden',
      margin: '18px 0 0'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/flyer-menuboard-aktion.jpeg",
    alt: "Vier HYADS Men\xFCboards, von der Decke abgeh\xE4ngt",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: '50% 16%'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 40px 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "3x 43 Zoll Men\xFCboards"), /*#__PURE__*/React.createElement(SectionHeading, {
    size: "md",
    accent: "ich haben Aktion!"
  }, "Unsere Wow \u2013 das muss"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-body)',
      color: 'var(--ink-500)',
      lineHeight: 'var(--leading-body)'
    }
  }, "3x Digital Signage Men\xFCboards 43\u201D inkl. Wandhalterung und Leistungspaket*."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(PriceBlock, {
    price: "2799,99\u20AC",
    was: "3547,99\u20AC",
    size: "lg"
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "chevrons-right",
    size: 30,
    color: "var(--violet-300)",
    strokeWidth: 2.4
  }), /*#__PURE__*/React.createElement(OfferCard, {
    headline: "+ Gratis",
    style: {
      flex: 1
    },
    media: /*#__PURE__*/React.createElement(DisplayFrame, {
      ratio: "32:9",
      bezel: 5,
      shadow: false,
      style: {
        width: '100%'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/imagery/flyer-menuboard-aktion.jpeg",
      alt: "",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: '50% 72%'
      }
    }))
  }, "1x Bar Display", /*#__PURE__*/React.createElement("br", null), "im Wert von ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--violet-700)'
    }
  }, "499\u20AC")), /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 22,
    color: "var(--violet-700)",
    strokeWidth: 2.4
  }), /*#__PURE__*/React.createElement(OfferCard, {
    headline: "+ 3 Monate",
    style: {
      flex: 1
    },
    media: /*#__PURE__*/React.createElement("div", {
      style: {
        height: 62,
        borderRadius: 'var(--radius-sm)',
        background: 'var(--violet-050)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "monitor-play",
      size: 30,
      color: "var(--violet-700)",
      strokeWidth: 1.6
    }))
  }, "Software Abo", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--violet-700)'
    }
  }, "gratis")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(PromoSeal, {
    label: "Gesamt-wert",
    value: "949\u20AC",
    sub: "gratis",
    size: 116
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--ink-500)'
    }
  }, "Aktion nur bis", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--ink-900)'
    }
  }, "31.08.2026"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '32px 40px 0',
      borderTop: '1px solid var(--border-default)'
    }
  }), /*#__PURE__*/React.createElement(BenefitStrip, {
    title: "Leistungspaket",
    style: {
      padding: '24px 40px 32px'
    },
    items: [{
      icon: 'palette',
      label: 'Content Kreation'
    }, {
      icon: 'download',
      label: 'Software Installation'
    }, {
      icon: 'shield-check',
      label: '5 Jahre Garantie'
    }, {
      icon: 'wrench',
      label: 'Montage*'
    }]
  }));
}
Object.assign(window, {
  OfferSheet
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hysn-flyer/OfferSheet.jsx", error: String((e && e.message) || e) }); }

// ui_kits/hysn-website/AktionSection.jsx
try { (() => {
const {
  Eyebrow,
  PromoSeal,
  Button,
  Icon
} = window.HYSNDesignSystem_e25aa3;
const DEADLINE = new Date('2026-08-31T23:59:59+02:00');
function useCountdown() {
  const [now, setNow] = React.useState(() => Date.now());
  React.useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const ms = Math.max(0, DEADLINE - now);
  return {
    d: Math.floor(ms / 864e5),
    h: Math.floor(ms / 36e5) % 24,
    m: Math.floor(ms / 6e4) % 60,
    s: Math.floor(ms / 1e3) % 60,
    over: ms === 0
  };
}
const PAKET = [['palette', 'Content Kreation', 'Wir gestalten Ihre komplette Karte'], ['download', 'Software Installation', 'Einrichtung & Schulung inklusive'], ['wrench', 'Montage*', 'Im Umkreis von 50 km inklusive'], ['shield-check', '5 Jahre Garantie', 'Läuft nicht? Wir tauschen.']];
function ScreenPanel({
  src,
  alt
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: '1 1 0',
      background: '#26262b',
      borderRadius: 2,
      padding: 3,
      boxShadow: '0 40px 70px -26px rgba(0,0,0,.66)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 0,
      overflow: 'hidden',
      background: 'var(--ink-900)',
      aspectRatio: '9/16'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: '50% 50%'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(112deg,rgba(255,255,255,.09) 0%,rgba(255,255,255,.03) 24%,rgba(255,255,255,0) 42%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "glare"
  })));
}
function OfferBoard() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'clamp(5px,0.6vw,9px)',
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement(ScreenPanel, {
    src: "../../assets/imagery/site/board-pizza.png",
    alt: "Pizza- und Dessert-Men\xFC auf einem vertikalen HYSN Men\xFCboard"
  }), /*#__PURE__*/React.createElement(ScreenPanel, {
    src: "../../assets/imagery/site/board-drinks.png",
    alt: "Drinks-Men\xFC auf einem vertikalen HYSN Men\xFCboard"
  }), /*#__PURE__*/React.createElement(ScreenPanel, {
    src: "../../assets/imagery/site/board-kicherbowl.png",
    alt: "Kicher-Bowl-Kampagne auf einem vertikalen HYSN Men\xFCboard"
  }));
}
function BonusCard({
  icon,
  img,
  imgAlt,
  kicker,
  title,
  value
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--white)',
      borderRadius: 18,
      padding: 'clamp(9px,1.05vw,15px) clamp(12px,1.5vw,22px)',
      display: 'flex',
      alignItems: 'center',
      gap: 'clamp(9px,1.1vw,16px)',
      boxShadow: '0 20px 44px -22px rgba(0,0,0,.5)',
      whiteSpace: 'nowrap'
    }
  }, img ? /*#__PURE__*/React.createElement("img", {
    src: img,
    alt: imgAlt || '',
    style: {
      width: 'clamp(170px,18vw,260px)',
      height: 'auto',
      flex: '0 0 auto'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: 'clamp(38px,3.9vw,56px)',
      height: 'clamp(38px,3.9vw,56px)',
      borderRadius: 14,
      background: 'var(--violet-050)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 30,
    color: "var(--violet-700)",
    strokeWidth: 1.7,
    style: {
      width: 'clamp(20px,2.1vw,30px)',
      height: 'clamp(20px,2.1vw,30px)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 'clamp(11px,1.05vw,15px)',
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--violet-700)'
    }
  }, kicker), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(14px,1.32vw,19px)',
      color: 'var(--ink-900)'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'clamp(11.5px,1vw,14.5px)',
      color: 'var(--ink-500)'
    }
  }, "im Wert von ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--violet-700)'
    }
  }, value))));
}
function QuickForm() {
  const [sent, setSent] = React.useState(false);
  const [promo, setPromo] = React.useState(false);
  const fld = {
    flex: '1 1 180px',
    minWidth: 0,
    background: 'rgba(255,255,255,.06)',
    border: '1px solid rgba(255,255,255,.16)',
    borderRadius: 999,
    padding: '17px 22px',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-body)',
    color: 'var(--white)',
    outline: 'none'
  };
  if (sent) return /*#__PURE__*/React.createElement("div", {
    className: "pop",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '14px 0'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle-2",
    size: 26,
    color: "var(--green-500)",
    strokeWidth: 1.7
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body)',
      color: 'rgba(255,255,255,.85)'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--white)'
    }
  }, "Anfrage erhalten!"), " Wir melden uns innerhalb von 24 Stunden bei Ihnen."));
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flexWrap: 'wrap',
      flex: '1 1 auto'
    }
  }, /*#__PURE__*/React.createElement("input", {
    className: "fld-dark",
    style: fld,
    placeholder: "Betrieb",
    required: true
  }), /*#__PURE__*/React.createElement("input", {
    className: "fld-dark",
    style: fld,
    placeholder: "Ihr Name",
    required: true
  }), /*#__PURE__*/React.createElement("input", {
    className: "fld-dark",
    style: fld,
    type: "tel",
    placeholder: "Telefon oder E-Mail",
    required: true
  }), promo && /*#__PURE__*/React.createElement("div", {
    className: "pop",
    style: {
      position: 'relative',
      flex: '1 1 180px',
      minWidth: 0,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "tag",
    size: 16,
    color: "var(--violet-300)",
    style: {
      position: 'absolute',
      left: 20,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("input", {
    className: "fld-dark",
    style: {
      ...fld,
      flex: '1 1 auto',
      paddingLeft: 46,
      textTransform: 'uppercase',
      letterSpacing: '.06em'
    },
    placeholder: "Aktionscode",
    autoFocus: true
  })), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "onDark",
    type: "submit",
    className: "cta-r",
    style: {
      padding: '20px 34px',
      flex: '0 0 auto'
    },
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 19
    })
  }, "Aktion sichern"), !promo && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setPromo(true),
    style: {
      all: 'unset',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-sm)',
      fontWeight: 600,
      color: 'var(--violet-300)',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "tag",
    size: 15
  }), "Sie haben einen Aktionscode?"));
}
function AktionSection() {
  const c = useCountdown();
  return /*#__PURE__*/React.createElement("section", {
    id: "aktion",
    "data-screen-label": "Aktion",
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'radial-gradient(48% 52% at 86% -4%, rgba(123,75,196,.28) 0%, rgba(123,75,196,0) 60%), linear-gradient(180deg,#14101b 0%,#0d0b10 55%)',
      color: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'calc(var(--max-width-content) + 320px)',
      margin: '0 auto',
      position: 'relative',
      padding: 'calc(var(--header-h, 87px) + 16px) var(--gutter-page) var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,.88fr) minmax(0,1.12fr)',
      gap: 'var(--space-7)',
      alignItems: 'center',
      position: 'relative'
    },
    "data-grid": "aktion"
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: '-14%',
      top: '-18%',
      width: '68%',
      height: '130%',
      background: 'radial-gradient(50% 50% at 50% 46%, rgba(255,166,0,.13) 0%, rgba(123,75,196,.12) 42%, rgba(0,0,0,0) 72%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-rv": true
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "onDark"
  }, "3x 43 Zoll Men\xFCboards")), /*#__PURE__*/React.createElement("h1", {
    "data-rv": true,
    style: {
      '--rd': '90ms',
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 'clamp(26px,2.7vw,38px)',
      lineHeight: 1.08,
      letterSpacing: 'var(--tracking-display)',
      textTransform: 'uppercase',
      textWrap: 'balance',
      color: 'var(--white)'
    }
  }, "Unsere Wow \u2013 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--violet-300)'
    }
  }, "das muss ich haben Aktion!")), /*#__PURE__*/React.createElement("p", {
    "data-rv": true,
    style: {
      '--rd': '170ms',
      margin: 0,
      fontSize: 'var(--text-body-lg)',
      lineHeight: 'var(--leading-body)',
      color: 'rgba(255,255,255,.72)',
      maxWidth: '42ch'
    }
  }, "3x Digital Signage Men\xFCboards 43\u201D inkl. Wandhalterung und Leistungspaket*."), /*#__PURE__*/React.createElement("div", {
    "data-rv": true,
    "data-count": "",
    style: {
      '--rd': '230ms',
      display: 'flex',
      gap: 10,
      marginTop: 'var(--space-2)'
    }
  }, [[c.d, 'Tage'], [c.h, 'Std'], [c.m, 'Min'], [c.s, 'Sek']].map(([v, l]) => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      background: 'rgba(255,255,255,.06)',
      border: '1px solid rgba(255,255,255,.13)',
      borderRadius: 10,
      padding: '11px 8px',
      textAlign: 'center',
      minWidth: 72,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("span", {
    key: String(v),
    className: "tick",
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 28,
      color: 'var(--amber-500)',
      lineHeight: 1.1,
      fontVariantNumeric: 'tabular-nums'
    }
  }, String(v).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 10.5,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.6)',
      marginTop: 3
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    "data-rv": true,
    style: {
      '--rd': '260ms',
      fontSize: 'var(--text-body)',
      color: 'rgba(255,255,255,.75)'
    }
  }, "Aktion endet am ", /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      color: 'var(--white)'
    }
  }, "31.08.2026"))), /*#__PURE__*/React.createElement("div", {
    "data-rv": "z",
    "data-el": "boards",
    style: {
      '--rd': '200ms',
      position: 'relative',
      marginTop: 8,
      maxWidth: 560,
      width: '100%',
      justifySelf: 'end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      animation: 'drift 8s ease-in-out infinite'
    }
  }, /*#__PURE__*/React.createElement(OfferBoard, null)), /*#__PURE__*/React.createElement("div", {
    "data-el": "seal",
    style: {
      position: 'absolute',
      left: -80,
      top: '40%',
      zIndex: 3,
      transform: 'rotate(-5deg)'
    }
  }, /*#__PURE__*/React.createElement(PromoSeal, {
    label: "Gesamtwert",
    value: "949\u20AC",
    sub: "gratis",
    size: 156,
    style: {
      background: 'var(--gradient-brand)',
      boxShadow: '0 22px 44px -16px rgba(0,0,0,.6)'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    "data-rv": true,
    "data-row": "bonus",
    style: {
      '--rd': '120ms',
      display: 'flex',
      alignItems: 'center',
      gap: 'clamp(14px,2vw,32px)',
      flexWrap: 'wrap',
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 'clamp(34px,3.8vw,54px)',
      lineHeight: 1,
      color: 'var(--white)',
      letterSpacing: '-.01em',
      whiteSpace: 'nowrap'
    }
  }, "2799,99\u20AC"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 17,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.5)',
      marginTop: 6
    }
  }, "Statt ", /*#__PURE__*/React.createElement("s", null, "3547,99\u20AC"))), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      color: 'var(--violet-400)',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 34,
    strokeWidth: 2.6,
    style: {
      marginRight: -17,
      width: 'clamp(24px,2.4vw,34px)',
      height: 'clamp(24px,2.4vw,34px)'
    }
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 34,
    strokeWidth: 2.6,
    style: {
      marginRight: -17,
      opacity: .65,
      width: 'clamp(24px,2.4vw,34px)',
      height: 'clamp(24px,2.4vw,34px)'
    }
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 34,
    strokeWidth: 2.6,
    style: {
      opacity: .35,
      width: 'clamp(24px,2.4vw,34px)',
      height: 'clamp(24px,2.4vw,34px)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'clamp(10px,1.25vw,18px)'
    }
  }, /*#__PURE__*/React.createElement(BonusCard, {
    img: "../../assets/bar-display.png",
    imgAlt: "Bar Display mit Getr\xE4nke-Motiven",
    kicker: "+ Gratis",
    title: "1x Bar Display",
    value: "499\u20AC"
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 'clamp(28px,2.8vw,40px)',
      height: 'clamp(28px,2.8vw,40px)',
      borderRadius: '50%',
      background: 'var(--violet-700)',
      color: 'var(--white)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 'clamp(16px,1.55vw,22px)',
      flex: '0 0 auto'
    }
  }, "+"), /*#__PURE__*/React.createElement(BonusCard, {
    icon: "monitor-play",
    kicker: "+ 3 Monate",
    title: "Software-Abo gratis",
    value: "450\u20AC"
  }))), /*#__PURE__*/React.createElement("div", {
    "data-rv": true,
    "data-row": "cta",
    style: {
      '--rd': '200ms',
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(QuickForm, null)), /*#__PURE__*/React.createElement("div", {
    "data-rv": true,
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 'var(--space-4)',
      flexWrap: 'wrap',
      margin: 'var(--space-7) 0 var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 'var(--text-h4)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--white)'
    }
  }, "Leistungspaket"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body-sm)',
      color: 'rgba(255,255,255,.55)'
    }
  }, "Alles im Aktionspreis enthalten.")), /*#__PURE__*/React.createElement("div", {
    "data-rv": true,
    style: {
      '--rd': '120ms',
      display: 'grid',
      gridTemplateColumns: 'repeat(4,minmax(0,1fr))',
      gap: 'var(--space-6)'
    },
    "data-grid": "paket"
  }, PAKET.map(([ic, title, sub]) => /*#__PURE__*/React.createElement("div", {
    key: title,
    style: {
      borderTop: '1px solid rgba(255,255,255,.16)',
      paddingTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 18,
    color: "var(--violet-300)",
    strokeWidth: 1.6
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 16.5,
      lineHeight: 'var(--leading-tight)',
      color: 'var(--white)'
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-body-sm)',
      lineHeight: 'var(--leading-body)',
      color: 'rgba(255,255,255,.6)',
      marginTop: 8
    }
  }, sub)))), /*#__PURE__*/React.createElement("p", {
    "data-rv": true,
    style: {
      margin: 'var(--space-6) 0 0',
      fontSize: 'var(--text-caption)',
      color: 'rgba(255,255,255,.45)'
    }
  }, "* Montage im Umkreis von 50km inklusive. Angebot g\xFCltig bis 31.08.2026. Alle Preise zzgl. MwSt.")));
}
Object.assign(window, {
  AktionSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hysn-website/AktionSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/hysn-website/ContactSection.jsx
try { (() => {
const {
  SectionHeading,
  Button,
  Icon,
  Card
} = window.HYSNDesignSystem_e25aa3;
function ContactSection() {
  const [sent, setSent] = React.useState(false);
  const [promo, setPromo] = React.useState(false);
  const field = {
    width: '100%',
    boxSizing: 'border-box',
    padding: '12px 14px',
    border: '1px solid var(--border-subtle)',
    borderRadius: 'var(--radius-sm)',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-body-sm)',
    color: 'var(--ink-800)',
    background: 'var(--white)'
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "kontakt",
    "data-screen-label": "Kontakt",
    style: {
      background: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--max-width-content)',
      margin: '0 auto',
      padding: 'var(--space-11) var(--gutter-page)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-9)',
      alignItems: 'center'
    },
    "data-grid": "contact"
  }, /*#__PURE__*/React.createElement("div", {
    "data-rv": true,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    size: "sm",
    accent: "ohne Druckkosten."
  }, "\xC4ndern. Speichern. Fertig \u2013"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-body)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--ink-500)',
      maxWidth: '44ch'
    }
  }, "Wir beraten Sie zu Gr\xF6sse, Montage und Software \u2013 und melden uns am selben Werktag zur\xFCck."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      marginTop: 'var(--space-2)'
    }
  }, [['Beratung anfragen', 'Formular oder WhatsApp – kostenlos, ca. 15 Minuten.'], ['Wir übernehmen alles', 'Montage, Installation und Ihr erster Karten-Content.'], ['Board läuft', 'Änderungen machen Sie ab jetzt in Sekunden selbst.']].map(([t, sub], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    className: "srow",
    style: {
      '--rd': `${180 + i * 110}ms`,
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      flex: '0 0 auto',
      borderRadius: '50%',
      background: 'var(--violet-100)',
      color: 'var(--violet-700)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 13
    }
  }, i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body-sm)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--ink-700)'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--ink-900)'
    }
  }, t, "."), " ", sub)))), /*#__PURE__*/React.createElement("div", {
    className: "srow",
    "data-row": "wa",
    style: {
      '--rd': '520ms',
      display: 'flex',
      gap: 'var(--space-3)',
      flexWrap: 'wrap',
      marginTop: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "md",
    variant: "secondary",
    as: "a",
    href: "https://wa.me/4915144300333?text=Hallo%20HYSN%2C%20bitte%20senden%20Sie%20mir%20die%20Preis%C3%BCbersicht.",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "message-circle",
      size: 17
    })
  }, "Preis\xFCbersicht per WhatsApp")), /*#__PURE__*/React.createElement("div", {
    className: "srow",
    style: {
      '--rd': '600ms',
      display: 'flex',
      gap: 'var(--space-5)',
      flexWrap: 'wrap'
    }
  }, [['mail', 'info@hysn.de'], ['phone', '+49 151 44300 333']].map(([ic, t]) => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--ink-600)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 17,
    color: "var(--violet-700)"
  }), t)))), /*#__PURE__*/React.createElement("div", {
    "data-rv": "r",
    style: {
      '--rd': '150ms'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "tint",
    padding: "lg",
    radius: "lg"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    className: "pop",
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-4)',
      padding: 'var(--space-8) 0',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle-2",
    size: 38,
    color: "var(--green-500)",
    strokeWidth: 1.7
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-h3)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)'
    }
  }, "Anfrage gesendet"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-body-sm)',
      color: 'var(--ink-500)',
      maxWidth: '32ch',
      lineHeight: 'var(--leading-body)'
    }
  }, "Wir melden uns am selben Werktag bei Ihnen zur\xFCck.")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    className: "fld",
    style: field,
    placeholder: "Betrieb",
    required: true
  }), /*#__PURE__*/React.createElement("input", {
    className: "fld",
    style: field,
    placeholder: "Ihr Name",
    required: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    className: "fld",
    style: field,
    type: "email",
    placeholder: "E-Mail",
    required: true
  }), /*#__PURE__*/React.createElement("input", {
    className: "fld",
    style: field,
    type: "tel",
    placeholder: "Telefon",
    required: true
  })), /*#__PURE__*/React.createElement("textarea", {
    className: "fld",
    style: {
      ...field,
      minHeight: 96,
      resize: 'vertical'
    },
    placeholder: "Wie viele Bildschirme ben\xF6tigen Sie?"
  }), promo ? /*#__PURE__*/React.createElement("div", {
    className: "pop",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "tag",
    size: 16,
    color: "var(--violet-700)",
    style: {
      position: 'absolute',
      left: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("input", {
    className: "fld",
    style: {
      ...field,
      paddingLeft: 40,
      textTransform: 'uppercase',
      letterSpacing: '.06em'
    },
    placeholder: "Aktionscode",
    autoFocus: true
  })) : /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setPromo(true),
    style: {
      all: 'unset',
      cursor: 'pointer',
      alignSelf: 'flex-start',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-sm)',
      fontWeight: 600,
      color: 'var(--violet-700)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "tag",
    size: 15
  }), "Sie haben einen Aktionscode?"), /*#__PURE__*/React.createElement(Button, {
    size: "md",
    fullWidth: true,
    type: "submit"
  }, "Beratung anfragen"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--ink-400)'
    }
  }, "Alle Preise zzgl. MwSt. Montage im Umkreis von 50 km inklusive."))))));
}
Object.assign(window, {
  ContactSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hysn-website/ContactSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/hysn-website/FaqSection.jsx
try { (() => {
const {
  Eyebrow,
  SectionHeading,
  Icon,
  Button
} = window.HYSNDesignSystem_e25aa3;
const QA = [['Was ist im Aktionspreis von 2799,99€ enthalten?', 'Drei 43-Zoll Digital Signage Menüboards inklusive Wandhalterung, dazu das komplette Leistungspaket: Content Kreation (wir gestalten Ihre Karte), Software-Installation mit Schulung, Montage im Umkreis von 50 km und 5 Jahre Garantie. Gratis obendrauf: ein Bar Display im Wert von 499€ und 3 Monate Software-Abo im Wert von 450€. Alle Preise zzgl. MwSt.'], ['Was kostet die Software nach den 3 Gratis-Monaten?', 'Danach läuft das Software-Abo zu 150€ pro Monat weiter. Damit sind Updates, Fernwartung und der Ansprechpartner vor Ort abgedeckt — die Details klären wir im Beratungsgespräch.'], ['Kann ich Preise und Inhalte selbst ändern?', 'Ja — Ändern. Speichern. Fertig. Preise, Gerichte und Aktionen passen Sie selbst in der Software an, ohne Techniker und ohne Wartezeit. Die Schulung dafür ist in der Installation enthalten.'], ['Ist die Montage wirklich inklusive?', 'Ja, im Umkreis von 50 km ist die Montage im Aktionspreis enthalten. Liegt Ihr Standort weiter entfernt, erstellen wir Ihnen ein Angebot für die Anfahrt.'], ['Was passiert, wenn ein Board nicht läuft?', 'Dafür steht die 5-Jahre-Garantie: Läuft nicht? Wir tauschen. Vieles lösen wir vorab per Fernwartung, ohne dass jemand vorbeikommen muss.'], ['Warum nicht einfach ein normaler Fernseher?', 'Consumer-TVs sind für 4–8 Stunden Betrieb gebaut — Menüboards laufen 24 Stunden im Dauerbetrieb, mit hoher Leuchtstärke, Einbrennschutz und erfüllten Brandschutzvorgaben. Der volle Vergleich steht unter „Warum HYSN“.'], ['Gibt es andere Größen als 43 Zoll?', 'Ja — 32, 55 und 65 Zoll sind direkt verfügbar, weitere Größen auf Anfrage. Alle Boards laufen wahlweise im Quer- oder Hochformat.'], ['Wie lange gilt die Aktion?', 'Die Wow-Aktion gilt bis zum 31.08.2026. Danach gelten wieder die regulären Preise — der Countdown oben auf der Seite zählt mit.']];
function FaqItem({
  q,
  a,
  open,
  onToggle,
  i
}) {
  return /*#__PURE__*/React.createElement("div", {
    "data-rv": true,
    style: {
      '--rd': `${i * 60}ms`,
      background: open ? 'var(--white)' : 'transparent',
      border: '1px solid',
      borderColor: open ? 'var(--violet-200)' : 'var(--violet-100)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: open ? 'var(--shadow-md)' : 'none',
      transition: 'background .3s var(--ease-out), border-color .3s var(--ease-out), box-shadow .3s var(--ease-out)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onToggle,
    "aria-expanded": open,
    style: {
      all: 'unset',
      boxSizing: 'border-box',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-4)',
      width: '100%',
      padding: '18px 22px',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-body-lg)',
      lineHeight: 'var(--leading-tight)',
      color: open ? 'var(--violet-700)' : 'var(--ink-900)',
      transition: 'color .3s var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", null, q), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 30,
      height: 30,
      flex: '0 0 auto',
      borderRadius: '50%',
      background: open ? 'var(--violet-700)' : 'var(--violet-050)',
      color: open ? 'var(--white)' : 'var(--violet-700)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transform: open ? 'rotate(180deg)' : 'none',
      transition: 'transform .35s var(--ease-out), background .3s var(--ease-out), color .3s var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 17,
    strokeWidth: 2.4
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateRows: open ? '1fr' : '0fr',
      transition: 'grid-template-rows .38s var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      padding: '0 56px 20px 22px',
      fontSize: 'var(--text-body)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--ink-600)'
    }
  }, a))));
}
function FaqSection() {
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    id: "faq",
    "data-screen-label": "FAQ",
    style: {
      background: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--max-width-content)',
      margin: '0 auto',
      padding: 'var(--space-10) var(--gutter-page)',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,.72fr) minmax(0,1fr)',
      gap: 'var(--space-9)',
      alignItems: 'start'
    },
    "data-grid": "faq"
  }, /*#__PURE__*/React.createElement("div", {
    "data-rv": true,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      position: 'sticky',
      top: 110
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "H\xE4ufige Fragen"), /*#__PURE__*/React.createElement(SectionHeading, {
    size: "sm"
  }, "Noch Fragen zur Aktion?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-body)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--ink-600)',
      maxWidth: '38ch'
    }
  }, "Hier sind die Antworten, die wir am h\xE4ufigsten geben. Alles andere kl\xE4ren wir am schnellsten pers\xF6nlich."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      flexWrap: 'wrap',
      marginTop: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    as: "a",
    href: "#kontakt",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 17
    })
  }, "Beratung anfragen"), /*#__PURE__*/React.createElement(Button, {
    as: "a",
    href: "tel:+4915144300333",
    variant: "secondary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 17
    })
  }, "+49 151 44300 333"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, QA.map(([q, a], i) => /*#__PURE__*/React.createElement(FaqItem, {
    key: i,
    q: q,
    a: a,
    i: i,
    open: open === i,
    onToggle: () => setOpen(open === i ? -1 : i)
  })))));
}
Object.assign(window, {
  FaqSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hysn-website/FaqSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/hysn-website/FeatureMedia.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Vector recreations of the six HYSN CMS feature illustrations (photos: burgers + video poster only). */
const FM_IMG = '../../assets/imagery/site/';
const fmPanel = extra => ({
  position: 'relative',
  height: 186,
  background: 'var(--white)',
  border: '1px solid var(--border-default)',
  borderRadius: 'var(--radius-sm)',
  overflow: 'hidden',
  ...extra
});
const FM_CSS = `
@keyframes fmAnts{to{stroke-dashoffset:-22}}
@keyframes fmCurF{0%,100%{transform:translate(0,0)}50%{transform:translate(-5px,-6px)}}
@keyframes fmSeg{0%,28%{transform:translateX(0)}33%,61%{transform:translateX(100%)}66%,94%{transform:translateX(200%)}100%{transform:translateX(0)}}
@keyframes fmBar{0%,6%{width:15%;opacity:1}26%{width:77%}80%{width:77%;opacity:1}86%{width:77%;opacity:0}92%,96%{width:15%;opacity:0}100%{width:15%;opacity:1}}
@keyframes fmCurGo{0%,6%{left:15%;opacity:1}26%{left:72%}80%{left:72%;opacity:1}86%{opacity:0}92%,96%{left:15%;opacity:0}100%{left:15%;opacity:1}}
@keyframes fmPop{0%{transform:scale(0);opacity:0}7%{transform:scale(1.25);opacity:1}11%{transform:scale(1)}88%{transform:scale(1);opacity:1}96%,100%{transform:scale(0);opacity:0}}
@keyframes fmPulse{from{stroke-dashoffset:0}to{stroke-dashoffset:-410}}
@keyframes fmSpin{to{transform:rotate(360deg)}}
@keyframes fmProg{from{width:4%}to{width:98%}}
.fm-ants{animation:fmAnts 1.4s linear infinite}
.fm-cur{animation:fmCurF 4.6s ease-in-out infinite}
@keyframes fmSegC1{0%,28%{color:var(--white)}34%,92%{color:var(--ink-800)}100%{color:var(--white)}}
@keyframes fmSegC2{0%,30%{color:var(--ink-800)}34%,61%{color:var(--white)}67%,100%{color:var(--ink-800)}}
@keyframes fmSegC3{0%,63%{color:var(--ink-800)}67%,94%{color:var(--white)}100%{color:var(--ink-800)}}
.fm-seg{animation:fmSeg 7.5s cubic-bezier(.6,.05,.2,1) infinite}
.fm-segc1{animation:fmSegC1 7.5s ease infinite}
.fm-segc2{animation:fmSegC2 7.5s ease infinite}
.fm-segc3{animation:fmSegC3 7.5s ease infinite}
.fm-bar{animation:fmBar 7s ease infinite}
.fm-curgo{animation:fmCurGo 7s ease infinite}
.fm-pop{animation:fmPop 5.6s ease infinite}
.fm-pulse{animation:fmPulse 3.2s linear infinite}
.fm-spin{display:inline-flex;animation:fmSpin 5.5s linear infinite}
.fm-prog{animation:fmProg 9s linear infinite}
`;
function FMCursor({
  className = 'fm-cur',
  style,
  size = 19
}) {
  return /*#__PURE__*/React.createElement("svg", {
    className: className,
    style: {
      position: 'absolute',
      filter: 'drop-shadow(0 2px 3px rgba(17,17,17,.35))',
      ...style
    },
    width: size,
    height: size,
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5.2 2.4 L5.5 19.5 L9.9 15.7 L12.6 21.6 L15.5 20.2 L12.8 14.5 L18.6 13.9 Z",
    fill: "var(--ink-900)",
    stroke: "var(--white)",
    strokeWidth: "1.6",
    strokeLinejoin: "round"
  }));
}
const FMCheck = ({
  size = 9
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 12 12",
  fill: "none"
}, /*#__PURE__*/React.createElement("path", {
  d: "M2.2 6.4 4.9 9 9.8 3.2",
  stroke: "var(--white)",
  strokeWidth: "2.1",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));

/* 1 — Speisekarte ändern: CMS thumbnail picker, third burger selected */
function FMThumb({
  src,
  flip,
  selected
}) {
  const handle = {
    position: 'absolute',
    width: 7,
    height: 7,
    background: 'var(--white)',
    border: '1.5px solid var(--violet-600)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: 1,
      minWidth: 0,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      background: selected ? 'var(--violet-025)' : 'var(--white)',
      border: '1px solid var(--ink-100)',
      borderRadius: 8,
      padding: '8px 8px 10px',
      display: 'flex',
      flexDirection: 'column',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: FM_IMG + src,
    alt: "",
    style: {
      width: '100%',
      height: 70,
      objectFit: 'contain',
      transform: flip ? 'scaleX(-1)' : 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      height: 6,
      borderRadius: 99,
      background: 'var(--ink-100)',
      width: '86%'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      height: 6,
      borderRadius: 99,
      background: 'var(--ink-100)',
      width: '58%'
    }
  })), selected ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("svg", {
    style: {
      position: 'absolute',
      inset: -6,
      width: 'calc(100% + 12px)',
      height: 'calc(100% + 12px)',
      overflow: 'visible',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("rect", {
    className: "fm-ants",
    x: "1",
    y: "1",
    style: {
      width: 'calc(100% - 2px)',
      height: 'calc(100% - 2px)'
    },
    rx: "7",
    fill: "none",
    stroke: "var(--violet-600)",
    strokeWidth: "1.6",
    strokeDasharray: "6 5"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      ...handle,
      top: -9,
      left: -9
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...handle,
      top: -9,
      right: -9
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...handle,
      bottom: -9,
      left: -9
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...handle,
      bottom: -9,
      right: -9
    }
  }), /*#__PURE__*/React.createElement(FMCursor, {
    style: {
      right: -8,
      bottom: -13
    }
  })) : null);
}
function MenuEditMedia() {
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: fmPanel({
      padding: '18px 16px',
      display: 'flex',
      alignItems: 'center'
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 13,
      width: '100%',
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement(FMThumb, {
    src: "burger-cheese.png"
  }), /*#__PURE__*/React.createElement(FMThumb, {
    src: "burger-double.png"
  }), /*#__PURE__*/React.createElement(FMThumb, {
    src: "burger-cheese.png",
    flip: true,
    selected: true
  })));
}

/* 2 — Automatische Tageszeiten: segmented control, active daypart slides automatically */
const FMSegIcon = ({
  d,
  circle
}) => /*#__PURE__*/React.createElement("svg", {
  width: "22",
  height: "22",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.8",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, circle ? /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "4"
}) : null, /*#__PURE__*/React.createElement("path", {
  d: d
}));
const FM_SEG = [['M12 2v8M4.93 10.93l1.41 1.41M2 18h2M20 18h2M19.07 10.93l-1.41 1.41M22 22H2M8 6l4-4 4 4M16 18a4 4 0 0 0-8 0', false, 'Frühstück', '09:00 – 11:00'], ['M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41', true, 'Mittag', '11:00 – 16:00'], ['M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z', false, 'Abend', '16:00 – 22:00']];
function DaypartsMedia() {
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: fmPanel({
      display: 'flex',
      alignItems: 'center',
      padding: '0 18px'
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      background: 'var(--violet-025)',
      border: '1px solid var(--ink-100)',
      borderRadius: 14,
      padding: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "fm-seg",
    style: {
      position: 'absolute',
      top: 5,
      bottom: 5,
      left: 5,
      width: 'calc((100% - 10px)/3)',
      borderRadius: 10,
      background: 'var(--violet-700)',
      boxShadow: '0 6px 14px -6px rgba(69,23,122,.55)'
    }
  }), FM_SEG.map(([d, circle, label, time], i) => /*#__PURE__*/React.createElement("div", {
    key: label,
    className: 'fm-segc' + (i + 1),
    style: {
      position: 'relative',
      color: 'var(--ink-800)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 5,
      padding: '15px 4px 13px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(FMSegIcon, {
    d: d,
    circle: circle
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 10,
      letterSpacing: '.06em',
      textTransform: 'uppercase'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      fontWeight: 600,
      opacity: .75,
      fontVariantNumeric: 'tabular-nums',
      whiteSpace: 'nowrap'
    }
  }, time)))));
}

/* 3 — Videos & Animationen: player over the Crispy-Chicken poster */
function VideoMedia() {
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: fmPanel({
      background: '#000',
      border: 'none'
    })
  }, /*#__PURE__*/React.createElement("img", {
    src: FM_IMG + 'video-poster-crispy-wide.png',
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'contain'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "play",
    style: {
      position: 'absolute',
      left: '50%',
      top: '44%',
      marginLeft: -25,
      marginTop: -25,
      width: 50,
      height: 50,
      borderRadius: '50%',
      background: 'rgba(17,17,17,.32)',
      border: '2px solid rgba(255,255,255,.92)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backdropFilter: 'blur(2px)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 20 20",
    style: {
      marginLeft: 3
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4.5 2.8 L17 10 L4.5 17.2 Z",
    fill: "var(--white)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 14,
      right: 14,
      bottom: 11,
      height: 4,
      borderRadius: 99,
      background: 'rgba(255,255,255,.3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fm-prog",
    style: {
      position: 'relative',
      height: '100%',
      borderRadius: 99,
      background: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: -3,
      top: '50%',
      transform: 'translateY(-50%)',
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: 'var(--white)',
      boxShadow: '0 1px 4px rgba(0,0,0,.4)'
    }
  }))));
}

/* 4 — Aktionen planen: week calendar, promo bar draws itself in */
const FM_DAYS = ['MO', 'DI', 'MI', 'DO', 'FR', 'SA', 'SO'];
function CalendarMedia() {
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: fmPanel({
      padding: '14px 14px 12px',
      display: 'flex',
      flexDirection: 'column'
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7,1fr)',
      paddingBottom: 8
    }
  }, FM_DAYS.map(d => /*#__PURE__*/React.createElement("span", {
    key: d,
    style: {
      textAlign: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 10.5,
      letterSpacing: '.05em',
      color: 'var(--ink-800)'
    }
  }, d))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: 1,
      borderTop: '1px solid var(--ink-200)',
      background: 'repeating-linear-gradient(90deg,transparent 0,transparent calc(100%/7 - 1px),var(--ink-100) calc(100%/7 - 1px),var(--ink-100) calc(100%/7))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: '50%',
      height: 1,
      background: 'var(--ink-100)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fm-bar",
    style: {
      position: 'absolute',
      left: '1.5%',
      top: 10,
      width: '15%',
      height: 30,
      borderRadius: 7,
      background: 'var(--gradient-brand)',
      boxShadow: '0 6px 14px -6px rgba(69,23,122,.5)',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      whiteSpace: 'nowrap',
      fontSize: 11,
      fontWeight: 700,
      color: 'var(--white)',
      padding: '0 12px'
    }
  }, "2 f\xFCr 1 Burger Aktion")), /*#__PURE__*/React.createElement(FMCursor, {
    className: "fm-curgo",
    style: {
      top: 30,
      left: '15%'
    }
  })));
}

/* 5 — Alles online steuern: laptop / tablet / phone with sync ticks */
function FMSyncDisc({
  size,
  delay
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "fm-pop",
    style: {
      animationDelay: delay,
      width: size,
      height: size,
      borderRadius: '50%',
      background: 'var(--violet-700)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 10px -3px rgba(69,23,122,.5)'
    }
  }, /*#__PURE__*/React.createElement(FMCheck, {
    size: Math.round(size * 0.48)
  }));
}
function DevicesMedia() {
  const screen = {
    border: '3px solid var(--ink-800)',
    background: 'var(--white)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: fmPanel({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'clamp(14px,6%,26px)',
      padding: '0 16px'
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...screen,
      width: 116,
      height: 72,
      borderRadius: '8px 8px 2px 2px'
    }
  }, /*#__PURE__*/React.createElement(FMSyncDisc, {
    size: 28,
    delay: "0s"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 140,
      height: 8,
      background: 'var(--ink-800)',
      borderRadius: '1px 1px 7px 7px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '50%',
      top: 0,
      transform: 'translateX(-50%)',
      width: 30,
      height: 3,
      background: 'var(--white)',
      borderRadius: '0 0 3px 3px',
      opacity: .9
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...screen,
      width: 62,
      height: 84,
      borderRadius: 10
    }
  }, /*#__PURE__*/React.createElement(FMSyncDisc, {
    size: 24,
    delay: ".45s"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      ...screen,
      width: 38,
      height: 66,
      borderRadius: 9
    }
  }, /*#__PURE__*/React.createElement(FMSyncDisc, {
    size: 18,
    delay: ".9s"
  })));
}

/* 6 — Mehrere Standorte: central monitor syncing three Filialen */
const FMSync = ({
  size = 15,
  color = 'var(--violet-700)'
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: color,
  strokeWidth: "1.8",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M14 2 v3.33 h-3.33"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 8 a6 6 0 1 1 -6 -6 c1.68 0 3.29 .67 4.49 1.83 L14 5.33"
}));
const FMStore = () => /*#__PURE__*/React.createElement("svg", {
  width: "32",
  height: "27",
  viewBox: "0 0 34 28",
  fill: "none",
  stroke: "var(--ink-800)",
  strokeWidth: "1.7"
}, /*#__PURE__*/React.createElement("rect", {
  x: "7",
  y: "1.2",
  width: "20",
  height: "4.6",
  fill: "var(--white)"
}), /*#__PURE__*/React.createElement("rect", {
  x: "6",
  y: "12.2",
  width: "22",
  height: "14",
  fill: "var(--white)"
}), /*#__PURE__*/React.createElement("rect", {
  x: "3.5",
  y: "5.8",
  width: "27",
  height: "6.4",
  fill: "var(--violet-100)"
}), /*#__PURE__*/React.createElement("line", {
  x1: "10.25",
  y1: "5.8",
  x2: "10.25",
  y2: "12.2"
}), /*#__PURE__*/React.createElement("line", {
  x1: "17",
  y1: "5.8",
  x2: "17",
  y2: "12.2"
}), /*#__PURE__*/React.createElement("line", {
  x1: "23.75",
  y1: "5.8",
  x2: "23.75",
  y2: "12.2"
}), /*#__PURE__*/React.createElement("rect", {
  x: "13.8",
  y: "17",
  width: "6.4",
  height: "9.2",
  rx: "1",
  fill: "var(--ink-800)",
  stroke: "none"
}));
function FMLocCard({
  n,
  delay
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      background: 'var(--white)',
      border: '1px solid var(--ink-100)',
      borderRadius: 10,
      padding: '10px 8px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(FMStore, null), /*#__PURE__*/React.createElement("span", {
    className: "fm-pop",
    style: {
      animationDelay: delay,
      position: 'absolute',
      top: -6,
      right: -8,
      width: 15,
      height: 15,
      borderRadius: '50%',
      background: 'var(--violet-700)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 2px 6px rgba(69,23,122,.4)'
    }
  }, /*#__PURE__*/React.createElement(FMCheck, {
    size: 8
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 9.5,
      letterSpacing: '.06em',
      color: 'var(--ink-800)',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap'
    }
  }, "Filiale ", n));
}
function StandorteMedia() {
  const pulse = {
    stroke: 'var(--violet-600)',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeDasharray: '10 400',
    fill: 'none'
  };
  const fork = ['M150 0 V14 Q150 24 140 24 H60 Q50 24 50 34 V56', 'M150 0 V56', 'M150 0 V14 Q150 24 160 24 H240 Q250 24 250 34 V56'];
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: fmPanel({
      padding: '16px 7px 14px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: 'var(--violet-700)',
      borderRadius: 99,
      padding: '6px 12px',
      boxShadow: '0 6px 14px -6px rgba(69,23,122,.55)',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "fm-spin"
  }, /*#__PURE__*/React.createElement(FMSync, {
    size: 11,
    color: "var(--white)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 9.5,
      letterSpacing: '.1em',
      color: 'var(--white)'
    }
  }, "HYSN CMS")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      flex: 1,
      minHeight: 44
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 300 56",
    preserveAspectRatio: "none",
    fill: "none",
    style: {
      position: 'absolute',
      inset: 0,
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("g", {
    stroke: "var(--violet-200)",
    strokeWidth: "1.5"
  }, fork.map(d => /*#__PURE__*/React.createElement("path", {
    key: d,
    d: d
  }))), /*#__PURE__*/React.createElement("path", _extends({
    className: "fm-pulse",
    d: fork[0]
  }, pulse)), /*#__PURE__*/React.createElement("path", _extends({
    className: "fm-pulse",
    style: {
      animationDelay: '.9s'
    },
    d: fork[1]
  }, pulse)), /*#__PURE__*/React.createElement("path", _extends({
    className: "fm-pulse",
    style: {
      animationDelay: '1.7s'
    },
    d: fork[2]
  }, pulse)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      width: '100%'
    }
  }, [['.2s', 1], ['.5s', 2], ['.8s', 3]].map(([delay, n]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      width: '33.333%',
      padding: '0 7px',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement(FMLocCard, {
    n: n,
    delay: delay
  })))));
}
Object.assign(window, {
  FM_CSS,
  MenuEditMedia,
  DaypartsMedia,
  VideoMedia,
  CalendarMedia,
  DevicesMedia,
  StandorteMedia
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hysn-website/FeatureMedia.jsx", error: String((e && e.message) || e) }); }

// ui_kits/hysn-website/Features.jsx
try { (() => {
const {
  FeatureCard,
  SectionHeading,
  Eyebrow
} = window.HYSNDesignSystem_e25aa3;
const {
  FM_CSS,
  MenuEditMedia,
  DaypartsMedia,
  VideoMedia,
  CalendarMedia,
  DevicesMedia,
  StandorteMedia
} = window;
const FT_CSS = `
[data-ftcell]:hover{background:var(--violet-025)!important}
[data-ftcell]:hover [data-num]{color:var(--violet-700)!important}
[data-ftcell]:hover [data-num] span{background:var(--violet-700)!important}
`;
const ITEMS = [['Speisekarte ändern', 'Preise, Gerichte oder Bilder jederzeit selbst anpassen.', MenuEditMedia], ['Automatische Tageszeiten', 'Frühstück, Mittag- und Abendkarte wechseln automatisch.', DaypartsMedia], ['Videos & Animationen', 'Videos, GIFs und moderne Animationen sorgen für mehr Aufmerksamkeit.', VideoMedia], ['Aktionen planen', 'Planen Sie Angebote heute für nächste Woche oder den ganzen Monat.', CalendarMedia], ['Alles online steuern', 'Änderungen von überall aus – Laptop, Tablet oder Smartphone.', DevicesMedia], ['Mehrere Standorte verwalten', 'Alle Filialen zentral verwalten oder jede einzeln steuern.', StandorteMedia]];
function Features() {
  return /*#__PURE__*/React.createElement("section", {
    id: "software",
    "data-screen-label": "Software",
    style: {
      background: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement("style", null, FM_CSS + FT_CSS), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--max-width-content)',
      margin: '0 auto',
      padding: 'var(--space-11) var(--gutter-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-rv": true,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      marginBottom: 'var(--space-8)',
      maxWidth: '52ch'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "HYSN CMS"), /*#__PURE__*/React.createElement(SectionHeading, {
    size: "sm"
  }, "Was Sie selbst steuern")), /*#__PURE__*/React.createElement("div", {
    "data-rv": true,
    style: {
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
      gap: 1,
      background: 'var(--border-default)'
    },
    "data-grid": "features"
  }, ITEMS.map(([title, body, Media], i) => /*#__PURE__*/React.createElement(FeatureCard, {
    key: title,
    n: i + 1,
    title: title,
    media: /*#__PURE__*/React.createElement(Media, null)
  }, body))))));
}
Object.assign(window, {
  Features
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hysn-website/Features.jsx", error: String((e && e.message) || e) }); }

// ui_kits/hysn-website/Hero.jsx
try { (() => {
const {
  Button,
  Icon,
  Badge
} = window.HYSNDesignSystem_e25aa3;

/* The hero shows the product doing its job: a change is made in the CMS,
   saved, and goes live on the board — told by a cycling toast over the mockup. */
const TOASTS = [['pencil-line', 'Preis angepasst', 'Cheese Burger · 12,90 €'], ['check', 'Gespeichert', 'Änderung übernommen'], ['monitor-check', 'Live auf allen Bildschirmen', 'gleichzeitig aktualisiert']];
function Hero() {
  const wrap = React.useRef(null);
  const [toast, setToast] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setToast(v => (v + 1) % TOASTS.length), 3200);
    return () => clearInterval(t);
  }, []);
  const onMove = e => {
    const el = wrap.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--px', ((e.clientX - r.left) / r.width - .5).toFixed(3));
    el.style.setProperty('--py', ((e.clientY - r.top) / r.height - .5).toFixed(3));
  };
  const onLeave = () => {
    const el = wrap.current;
    if (el) {
      el.style.setProperty('--px', 0);
      el.style.setProperty('--py', 0);
    }
  };
  const [tIc, tTitle, tSub] = TOASTS[toast];
  const layer = f => ({
    transform: `translate3d(calc(var(--px,0)*${f}px), calc(var(--py,0)*${Math.round(f * .7)}px), 0)`,
    transition: 'transform .5s var(--ease-out)'
  });
  return /*#__PURE__*/React.createElement("section", {
    id: "produkt",
    "data-screen-label": "Produkt",
    style: {
      background: 'var(--white)',
      overflow: 'hidden',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(46% 64% at 14% 22%, var(--violet-050) 0%, rgba(242,240,251,0) 70%), radial-gradient(34% 42% at 100% 64%, var(--violet-050) 0%, rgba(242,240,251,0) 68%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--max-width-content)',
      margin: '0 auto',
      position: 'relative',
      padding: 'var(--space-6) var(--gutter-page) var(--space-10)',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.02fr) minmax(0,1fr)',
      gap: 'var(--space-9)',
      alignItems: 'center'
    },
    "data-grid": "hero"
  }, /*#__PURE__*/React.createElement("div", {
    "data-rv": "stage",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      order: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "srow"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "subtle",
    size: "sm"
  }, "Digital Signage f\xFCr Gastronomie")), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-black)',
      fontSize: 'clamp(26px, 2.9vw, 40px)',
      lineHeight: 'var(--leading-display)',
      letterSpacing: 'var(--tracking-display)',
      textTransform: 'uppercase',
      color: 'var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "h-mask"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      '--rd': '120ms'
    }
  }, "Ihre Speisekarte")), /*#__PURE__*/React.createElement("span", {
    className: "h-mask"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      '--rd': '240ms'
    }
  }, "war noch nie so")), /*#__PURE__*/React.createElement("span", {
    className: "h-mask"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      '--rd': '360ms',
      color: 'var(--violet-700)'
    }
  }, "einfach zu verwalten."))), /*#__PURE__*/React.createElement("p", {
    className: "srow",
    style: {
      '--rd': '440ms',
      margin: 0,
      fontSize: 'var(--text-body-lg)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--ink-500)',
      maxWidth: '38ch'
    }
  }, "\xC4nderungen in wenigen Sekunden \u2013 auf allen Bildschirmen gleichzeitig. Und Ihre Aktionen laufen dort, wo G\xE4ste bestellen: direkt \xFCber der Theke. Das verkauft mit."), /*#__PURE__*/React.createElement("div", {
    className: "srow",
    "data-cta": true,
    style: {
      '--rd': '540ms',
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-2)',
      flexWrap: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "md",
    as: "a",
    href: "#kontakt",
    className: "cta-r",
    style: {
      whiteSpace: 'nowrap',
      padding: '13px 22px',
      flex: '0 1 auto'
    },
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 17
    })
  }, "Beratung anfragen"), /*#__PURE__*/React.createElement(Button, {
    size: "md",
    variant: "secondary",
    as: "a",
    href: "#software",
    style: {
      whiteSpace: 'nowrap',
      padding: '13px 22px',
      flex: '0 1 auto'
    }
  }, "Software ansehen")), /*#__PURE__*/React.createElement("div", {
    className: "srow",
    style: {
      '--rd': '640ms',
      display: 'flex',
      gap: 'var(--space-3) var(--space-5)',
      marginTop: 'var(--space-4)',
      flexWrap: 'wrap'
    }
  }, [['timer', 'Änderungen in Sekunden'], ['printer', 'Keine Druckkosten'], ['shield-check', '5 Jahre Garantie']].map(([ic, t]) => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--ink-600)',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 16,
    color: "var(--violet-700)"
  }), t)))), /*#__PURE__*/React.createElement("div", {
    ref: wrap,
    onMouseMove: onMove,
    onMouseLeave: onLeave,
    className: "h-visual",
    "data-rv": "z",
    style: {
      '--rd': '200ms',
      position: 'relative',
      paddingBottom: 'var(--space-8)',
      order: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: layer(-7)
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/site/hero-cms-desktop.png",
    alt: "HYSN CMS auf einem Bildschirm im Restaurant: Men\xFCboard bearbeiten",
    style: {
      width: '100%',
      height: 420,
      objectFit: 'cover',
      display: 'block',
      borderRadius: 'var(--radius-lg)'
    }
  })), /*#__PURE__*/React.createElement("svg", {
    width: "112",
    height: "128",
    viewBox: "0 0 120 138",
    fill: "none",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: '68%',
      bottom: '29.5%',
      zIndex: 2,
      overflow: 'visible',
      filter: 'drop-shadow(0 2px 5px rgba(123,75,196,.4)) drop-shadow(0 0 16px rgba(123,75,196,.3))',
      ...layer(10)
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "swoosh",
    x1: "20",
    y1: "0",
    x2: "104",
    y2: "120",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#B394E3"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#7B4BC4"
  }))), /*#__PURE__*/React.createElement("path", {
    d: "M10 14 C 62 2, 100 32, 98 92",
    stroke: "url(#swoosh)",
    strokeWidth: "4.5",
    strokeLinecap: "round",
    opacity: ".35"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 14 C 62 2, 100 32, 98 92",
    pathLength: "100",
    stroke: "url(#swoosh)",
    strokeWidth: "4.5",
    strokeLinecap: "round",
    strokeDasharray: "26 74",
    style: {
      animation: 'arrowFlow 2.2s linear infinite'
    }
  }), /*#__PURE__*/React.createElement("path", {
    d: "M85 96 L98 112 L111 94",
    stroke: "#7B4BC4",
    strokeWidth: "4.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: '-6%',
      bottom: 0,
      width: '62%',
      ...layer(16)
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      animation: 'drift 7s ease-in-out infinite'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'linear-gradient(175deg,#3d3d44,#17171b 55%,#0b0b0e)',
      borderRadius: 13,
      padding: '6px 6px 16px',
      boxShadow: '0 36px 60px -20px rgba(0,0,0,.62), 0 12px 72px -8px rgba(255,166,0,.2), inset 0 1px 0 rgba(255,255,255,.16)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '50%',
      bottom: '100%',
      transform: 'translateX(-50%)',
      width: 9,
      height: 44,
      background: 'linear-gradient(90deg,#101013,#3c3c43 46%,#101013)',
      borderRadius: '3px 3px 0 0'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '50%',
      top: -3,
      transform: 'translateX(-50%)',
      width: 26,
      height: 5,
      background: '#0b0b0e',
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 7,
      overflow: 'hidden',
      background: '#000'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/imagery/site/board-cheeseburger-wide.png",
    alt: "Digitales Men\xFCboard mit Cheese Burger Aktion",
    style: {
      width: '100%',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(112deg,rgba(255,255,255,.12) 0%,rgba(255,255,255,.04) 24%,rgba(255,255,255,0) 42%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "glare"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 10,
      right: 10,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: 'rgba(17,17,17,.72)',
      backdropFilter: 'blur(6px)',
      WebkitBackdropFilter: 'blur(6px)',
      color: 'var(--white)',
      borderRadius: 'var(--radius-pill)',
      padding: '4px 10px',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 10,
      letterSpacing: '.14em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "live-dot",
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--green-500)'
    }
  }), "LIVE")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '50%',
      bottom: 4,
      transform: 'translateX(-50%)',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 7,
      letterSpacing: '.5em',
      textIndent: '.5em',
      color: 'rgba(255,255,255,.42)',
      lineHeight: 1
    }
  }, "HYSN"), /*#__PURE__*/React.createElement("span", {
    className: "live-dot",
    style: {
      position: 'absolute',
      right: 11,
      bottom: 7,
      width: 4,
      height: 4,
      borderRadius: '50%',
      background: 'var(--green-500)',
      boxShadow: '0 0 7px var(--green-500)'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    key: toast,
    className: "toast",
    style: {
      position: 'absolute',
      left: 0,
      bottom: '26%',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: 'var(--white)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      padding: '11px 16px 11px 12px',
      maxWidth: 260
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      flex: '0 0 auto',
      borderRadius: '50%',
      background: 'var(--violet-050)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: tIc,
    size: 17,
    color: "var(--violet-700)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      fontWeight: 600,
      color: 'var(--ink-900)',
      lineHeight: 1.25
    }
  }, tTitle), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--ink-500)',
      lineHeight: 1.3
    }
  }, tSub))))));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hysn-website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/hysn-website/ReelSection.jsx
try { (() => {
const {
  SectionHeading,
  Eyebrow,
  Button,
  Icon
} = window.HYSNDesignSystem_e25aa3;

/* Portrait reel (9:16). Poster only for now — when the video is uploaded,
   swap the <img> for <video poster={POSTER} src="..." controls playsInline>. */
const POSTER = '../../assets/imagery/site/showroom-reel-poster.png';
function ReelSection() {
  return /*#__PURE__*/React.createElement("section", {
    id: "showroom",
    "data-screen-label": "Showroom",
    style: {
      background: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--max-width-content)',
      margin: '0 auto',
      padding: 'var(--space-10) var(--gutter-page)',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,420px) minmax(0,1fr)',
      gap: 'var(--space-9)',
      alignItems: 'center'
    },
    "data-grid": "reel"
  }, /*#__PURE__*/React.createElement("div", {
    "data-rv": "z",
    className: "reel",
    style: {
      position: 'relative',
      maxWidth: 360,
      width: '100%',
      justifySelf: 'center',
      aspectRatio: '9/16',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-screen)',
      background: 'var(--ink-900)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: POSTER,
    alt: "Rundgang durch den HYSN Showroom: Men\xFCboards an der Wand, Bar Display in der Hand",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(17,17,17,.14)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "play",
    style: {
      width: 64,
      height: 64,
      borderRadius: '50%',
      background: 'rgba(255,255,255,.92)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "play",
    size: 26,
    color: "var(--violet-700)",
    strokeWidth: 2.2,
    style: {
      marginLeft: 3
    }
  })))), /*#__PURE__*/React.createElement("div", {
    "data-rv": true,
    style: {
      '--rd': '120ms',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Ansprechpartner vor Ort"), /*#__PURE__*/React.createElement(SectionHeading, {
    size: "sm",
    accent: "im Einsatz."
  }, "Sehen Sie die Boards"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-body)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--ink-500)',
      maxWidth: '46ch'
    }
  }, "Ein Rundgang durch unseren Showroom: Men\xFCboards, Bar Displays und die Software dahinter \u2013 gezeigt von den Menschen, die auch bei Ihnen montieren."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      flexWrap: 'wrap'
    }
  }, [['monitor', 'Alle Grössen live'], ['hand', 'Bar Display in der Hand'], ['map-pin', 'Showroom-Besuch möglich']].map(([ic, t]) => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--ink-600)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 16,
    color: "var(--violet-700)"
  }), t))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "md",
    as: "a",
    href: "#kontakt",
    className: "cta-r",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 17
    })
  }, "Beratung anfragen")))));
}
Object.assign(window, {
  ReelSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hysn-website/ReelSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/hysn-website/SiteFooter.jsx
try { (() => {
const {
  Wordmark,
  Icon
} = window.HYSNDesignSystem_e25aa3;
const NAV = [['Aktion', '#aktion'], ['Software', '#software'], ['Warum HYSN', '#warum'], ['Vorteile', '#vorteile']];
const CONTACT = [['phone', '+49 151 44300 333', 'tel:+4915144300333'], ['mail', 'info@hysn.de', 'mailto:info@hysn.de']];
function SiteFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    "data-screen-label": "Footer",
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'radial-gradient(52% 70% at 12% 0%, rgba(123,75,196,.22) 0%, rgba(123,75,196,0) 62%), linear-gradient(180deg,#14101b 0%,#0b0a0e 70%)',
      color: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement("style", null, `.f-lnk{color:rgba(255,255,255,.66);text-decoration:none;transition:color .25s var(--ease-out)}.f-lnk:hover{color:var(--white)}.f-cta{color:var(--amber-500);text-decoration:none;display:inline-flex;align-items:center;gap:8px}.f-cta:hover{color:var(--amber-400,#ffb733)}`), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: 3,
      background: 'var(--gradient-brand)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--max-width-content)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--gutter-page) var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-rv": true,
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.4fr) minmax(0,1fr) minmax(0,1fr)',
      gap: 'var(--space-8)',
      alignItems: 'start'
    },
    "data-grid": "footer"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    variant: "white",
    height: 30,
    base: "../.."
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-body)',
      lineHeight: 'var(--leading-body)',
      color: 'rgba(255,255,255,.6)',
      maxWidth: '34ch'
    }
  }, "Digital Signage Men\xFCboards f\xFCr die Gastronomie. \xC4ndern. Speichern. Fertig."), /*#__PURE__*/React.createElement("a", {
    className: "f-cta",
    href: "#aktion",
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-body-sm)',
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "live-dot",
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--amber-500)',
      boxShadow: '0 0 8px var(--amber-500)'
    }
  }), "Wow-Aktion l\xE4uft bis 31.08.2026", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 15,
    strokeWidth: 2.4
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.42)'
    }
  }, "Navigation"), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, NAV.map(([l, href]) => /*#__PURE__*/React.createElement("a", {
    key: href,
    className: "f-lnk",
    href: href,
    style: {
      fontSize: 'var(--text-body)'
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.42)'
    }
  }, "Kontakt"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, CONTACT.map(([icon, label, href]) => /*#__PURE__*/React.createElement("a", {
    key: icon,
    className: "f-lnk",
    href: href,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      fontSize: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 10,
      background: 'rgba(255,255,255,.07)',
      border: '1px solid rgba(255,255,255,.1)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 16,
    color: "var(--violet-300)"
  })), label))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,.1)',
      marginTop: 'var(--space-8)',
      paddingTop: 'var(--space-4)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-4)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'rgba(255,255,255,.42)'
    }
  }, "\xA9 2026 HYSN \xB7 Alle Rechte vorbehalten"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'rgba(255,255,255,.42)'
    }
  }, "Alle Preise zzgl. MwSt. \xB7 Montage im Umkreis von 50 km inklusive"))));
}
Object.assign(window, {
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hysn-website/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/hysn-website/SiteHeader.jsx
try { (() => {
const {
  Wordmark,
  Button,
  Icon
} = window.HYSNDesignSystem_e25aa3;
const LINKS = [['Aktion', '#aktion'], ['Software', '#software'], ['Warum HYSN', '#warum'], ['Vorteile', '#vorteile'], ['FAQ', '#faq']];
function SiteHeader() {
  const bar = React.useRef(null);
  const head = React.useRef(null);
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = head.current;
    if (!el) return;
    const fit = () => {
      el.style.marginBottom = -el.offsetHeight + 'px';
      document.documentElement.style.setProperty('--header-h', el.offsetHeight + 'px');
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    window.addEventListener('resize', fit);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', fit);
    };
  }, []);
  React.useEffect(() => {
    const on = () => {
      const h = document.documentElement;
      const p = Math.min(1, Math.max(0, h.scrollTop / (h.scrollHeight - window.innerHeight || 1)));
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
      setScrolled(s => h.scrollTop > 8 === s ? s : !s);
    };
    window.addEventListener('scroll', on, {
      passive: true
    });
    on();
    return () => window.removeEventListener('scroll', on);
  }, []);
  return /*#__PURE__*/React.createElement("header", {
    ref: head,
    "data-dark": scrolled ? undefined : '',
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      marginBottom: -87,
      background: scrolled ? 'rgba(255,255,255,.82)' : 'transparent',
      backdropFilter: scrolled ? 'var(--blur-glass)' : 'none',
      WebkitBackdropFilter: scrolled ? 'var(--blur-glass)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border-default)' : '1px solid transparent',
      boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
      transition: 'background var(--duration-slow) var(--ease-standard), box-shadow var(--duration-slow) var(--ease-standard), border-color var(--duration-slow) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--max-width-content)',
      margin: '0 auto',
      padding: '14px var(--gutter-page)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)'
    },
    "data-nav": "site"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#aktion",
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    variant: scrolled ? 'gradient' : 'white',
    height: 26,
    base: "../.."
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      marginLeft: 'auto',
      flexWrap: 'wrap',
      justifyContent: 'flex-end'
    }
  }, LINKS.map(([l, href]) => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: href,
    className: "navlnk",
    style: {
      fontSize: 'var(--text-body-sm)',
      color: scrolled ? 'var(--ink-600)' : 'rgba(255,255,255,.85)',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      transition: 'color var(--duration-slow) var(--ease-standard)'
    }
  }, l))), /*#__PURE__*/React.createElement("a", {
    href: "tel:+4915144300333",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      fontSize: 'var(--text-body-sm)',
      color: scrolled ? 'var(--ink-700)' : 'var(--white)',
      textDecoration: 'none',
      transition: 'color var(--duration-slow) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 16,
    color: scrolled ? 'var(--violet-700)' : 'var(--violet-300)'
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      whiteSpace: 'nowrap'
    }
  }, "+49 151 44300 333")), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    as: "a",
    href: "#kontakt"
  }, "Beratung anfragen")), /*#__PURE__*/React.createElement("div", {
    ref: bar,
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 0,
      bottom: -1,
      width: '100%',
      height: 2,
      background: 'var(--gradient-brand)',
      transformOrigin: '0 50%',
      transform: 'scaleX(0)'
    }
  }));
}
Object.assign(window, {
  SiteHeader
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hysn-website/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/hysn-website/StepBand.jsx
try { (() => {
const {
  Icon
} = window.HYSNDesignSystem_e25aa3;

/* The process claim gets its own moment: each word stamps in on scroll,
   the arrow slides in last. */
function StepBand() {
  const words = ['Ändern.', 'Speichern.', 'Fertig.'];
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Prozess",
    style: {
      background: 'var(--surface-footer)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-rv": "stage",
    style: {
      maxWidth: 'var(--max-width-content)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--gutter-page)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      flexWrap: 'wrap'
    }
  }, words.map((w, i) => /*#__PURE__*/React.createElement("span", {
    key: w,
    className: "step-w"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      '--rd': `${i * 150}ms`,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h2)',
      fontWeight: 'var(--weight-black)',
      textTransform: 'uppercase',
      letterSpacing: '-.005em',
      color: i === words.length - 1 ? 'var(--violet-700)' : 'var(--ink-900)'
    }
  }, w))), /*#__PURE__*/React.createElement("span", {
    className: "step-a",
    style: {
      '--rd': '560ms',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 34,
    color: "var(--violet-700)",
    strokeWidth: 2.2
  }))));
}
Object.assign(window, {
  StepBand
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hysn-website/StepBand.jsx", error: String((e && e.message) || e) }); }

// ui_kits/hysn-website/Strips.jsx
try { (() => {
const {
  SectionHeading,
  Eyebrow,
  IconCircle,
  Switch
} = window.HYSNDesignSystem_e25aa3;

/* "Bewegung zieht Aufmerksamkeit an" is HYSN's own pitch — so the Branchen
   row moves like signage content: a slow, continuous rail that pauses on hover. */
const BRANCHEN = [['utensils', 'Restaurants'], ['beef', 'Dönerläden'], ['croissant', 'Bäckereien'], ['coffee', 'Cafés'], ['ice-cream-cone', 'Eisdielen'], ['pizza', 'Pizzerien'], ['flame', 'Grillhäuser']];
function IdealFuer() {
  const tiles = [...BRANCHEN, ...BRANCHEN];
  return /*#__PURE__*/React.createElement("section", {
    id: "ideal-fur",
    "data-screen-label": "Ideal f\xFCr",
    style: {
      background: 'var(--white)',
      padding: 'var(--space-10) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-rv": true,
    style: {
      maxWidth: 'var(--max-width-content)',
      margin: '0 auto',
      padding: '0 var(--gutter-page)',
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 'var(--space-5)',
      marginBottom: 'var(--space-7)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    size: "sm"
  }, "Ideal f\xFCr"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body-sm)',
      color: 'var(--ink-400)'
    }
  }, "\u2026und jeden Betrieb mit einer Karte an der Wand.")), /*#__PURE__*/React.createElement("div", {
    "data-rv": true,
    className: "hysn-marquee",
    style: {
      '--rd': '120ms',
      overflow: 'hidden',
      WebkitMaskImage: 'linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%)',
      maskImage: 'linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hysn-marquee-track",
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      width: 'max-content',
      padding: '4px 0'
    }
  }, tiles.map(([ic, label], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      background: 'var(--violet-050)',
      borderRadius: 'var(--radius-pill)',
      padding: '14px 30px 14px 16px',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement(IconCircle, {
    name: ic,
    size: "md",
    tone: "brand"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--ink-900)'
    }
  }, label))))));
}

/* The CMS toggle is HYSN's most recognisable control (AKTION · 2 für 1 · toggle).
   So the benefits section IS a toggle: flip between the owner's everyday pain
   and what the same day looks like with HYSN. Cards cascade when flipped. */
const VORTEILE = [['usb', 'Keine USB-Sticks mehr', 'USB-Stick bespielen, hintragen, einstecken – für jede Änderung'], ['timer', 'Änderungen in Sekunden', 'Stunden warten, bis neue Karten überall hängen'], ['printer', 'Keine Druckkosten', 'Neu drucken bei jeder Preisänderung'], ['monitor-check', 'Einheitliches Erscheinungsbild', 'Jede Filiale sieht anders aus'], ['clock', 'Zeit sparen', 'Abende gehen für die Karte drauf'], ['star', 'Professioneller Auftritt', 'Zettel, Klebeband und Provisorien']];
function VorteileSection() {
  const [mit, setMit] = React.useState(true);
  return /*#__PURE__*/React.createElement("section", {
    id: "vorteile",
    "data-screen-label": "Vorteile",
    style: {
      background: 'var(--surface-footer)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--max-width-content)',
      margin: '0 auto',
      padding: 'var(--space-10) var(--gutter-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-rv": true,
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 'var(--space-6)',
      marginBottom: 'var(--space-7)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Ihre Vorteile auf einen Blick"), /*#__PURE__*/React.createElement(SectionHeading, {
    size: "sm"
  }, mit ? 'Mit HYSN.' : 'Ohne HYSN?')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      background: 'var(--white)',
      borderRadius: 'var(--radius-pill)',
      padding: '10px 20px',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 12.5,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: mit ? 'var(--ink-300)' : 'var(--ink-800)',
      transition: 'color var(--duration-base) var(--ease-standard)'
    }
  }, "Ohne"), /*#__PURE__*/React.createElement(Switch, {
    checked: mit,
    onChange: setMit
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 12.5,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: mit ? 'var(--violet-700)' : 'var(--ink-300)',
      transition: 'color var(--duration-base) var(--ease-standard)'
    }
  }, "Mit HYSN"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
      gap: 'var(--space-4)'
    },
    "data-grid": "vorteile"
  }, VORTEILE.map(([ic, gut, schlecht], i) => /*#__PURE__*/React.createElement("div", {
    key: gut,
    "data-rv": true,
    style: {
      '--rd': `${i * 60}ms`,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      background: mit ? 'var(--white)' : 'transparent',
      border: mit ? '1px solid transparent' : '1px dashed var(--ink-300)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-4) var(--space-5)',
      boxShadow: mit ? 'var(--shadow-sm)' : 'none',
      transition: `background var(--duration-slow) var(--ease-standard) ${i * 45}ms, box-shadow var(--duration-slow) var(--ease-standard) ${i * 45}ms, border-color var(--duration-slow) var(--ease-standard) ${i * 45}ms`
    }
  }, /*#__PURE__*/React.createElement(IconCircle, {
    name: mit ? ic : 'x',
    size: "sm",
    tone: mit ? 'brand' : 'outline',
    style: {
      transition: `background var(--duration-slow) var(--ease-standard) ${i * 45}ms`
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: mit ? 'var(--font-display)' : 'var(--font-body)',
      fontWeight: mit ? 700 : 400,
      fontSize: mit ? 13 : 'var(--text-body-sm)',
      letterSpacing: mit ? 'var(--tracking-label)' : 0,
      textTransform: mit ? 'uppercase' : 'none',
      lineHeight: 1.4,
      color: mit ? 'var(--ink-900)' : 'var(--ink-400)',
      transition: `color var(--duration-slow) var(--ease-standard) ${i * 45}ms`
    }
  }, mit ? gut : schlecht))))), /*#__PURE__*/React.createElement("p", {
    "data-rv": true,
    style: {
      '--rd': '380ms',
      margin: 'var(--space-5) 0 0',
      fontSize: 'var(--text-caption)',
      color: 'var(--ink-400)'
    }
  }, "Der Schalter ist derselbe wie im HYSN CMS \u2013 eine Aktion einschalten dauert genau so lang.")));
}
function Strips() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IdealFuer, null), /*#__PURE__*/React.createElement(VorteileSection, null));
}
Object.assign(window, {
  Strips
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hysn-website/Strips.jsx", error: String((e && e.message) || e) }); }

// ui_kits/hysn-website/WarumSection.jsx
try { (() => {
const {
  SectionHeading,
  Eyebrow,
  Icon,
  Badge,
  Wordmark
} = window.HYSNDesignSystem_e25aa3;
const ROWS = [{
  pro: 'Dauerbetrieb 24 Std/Tag',
  con: 'Kurzzeitbetrieb: 4–8 Std/Tag'
}, {
  pro: 'Brandschutzvorgaben erfüllt, Zulassung garantiert',
  con: 'Brandschutzvorgabe nicht erfüllt, Sicherheitsrisiko'
}, {
  pro: 'hohe Leuchtstärke',
  con: 'geringe Leuchtstärke'
}, {
  pro: 'Einbrennschutz',
  con: 'kein Einbrennschutz'
}, {
  pro: '36 Monate Garantie ab Werk, verlängerbar auf 60 Monate',
  con: 'Garantieverlust (Laufzeiten werden ausgelesen)'
}, {
  pro: 'Fernwartung möglich',
  con: 'Keine Fernwartung möglich'
}, {
  pro: 'Quer- und Hochformat',
  con: 'Ausschließlich Querformat'
}, {
  pro: 'High Brightness',
  con: 'Eingeschränkte Helligkeit'
}, {
  pro: 'Ansprechpartner vor Ort',
  con: 'Kein Ansprechpartner vor Ort'
}];
function Mark({
  ok,
  d
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "mark",
    style: {
      '--rd': d,
      width: 22,
      height: 22,
      flex: '0 0 auto',
      borderRadius: '50%',
      marginTop: 1,
      background: ok ? 'var(--green-100)' : 'var(--ink-100)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ok ? 'check' : 'x',
    size: 13,
    strokeWidth: 2.6,
    color: ok ? 'var(--green-600)' : 'var(--ink-400)'
  }));
}

/* Modern two-column comparison: the HYSN column is an elevated white "winner"
   card with a violet crown edge; the LCD column recedes on the lavender wash.
   Check marks pop in row by row as the cards scroll into view. */
function ComparisonModern() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.08fr) minmax(0,1fr)',
      gap: 'var(--space-5)',
      alignItems: 'stretch'
    },
    "data-grid": "vergleich"
  }, /*#__PURE__*/React.createElement("div", {
    "data-rv": true,
    style: {
      background: 'var(--white)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-lg)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      background: 'var(--gradient-brand)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5) var(--space-6) var(--space-4)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    variant: "gradient",
    height: 16,
    base: "../.."
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 'var(--text-h4)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--ink-900)'
    }
  }, "Digital Men\xFCboard")), /*#__PURE__*/React.createElement(Badge, {
    tone: "brand",
    size: "sm"
  }, "Empfohlen")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--space-5) var(--space-6)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, ROWS.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "cmp-row",
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'flex-start',
      padding: '11px 10px',
      borderTop: i ? '1px solid var(--violet-050)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(Mark, {
    ok: true,
    d: `${160 + i * 55}ms`
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body-sm)',
      lineHeight: 'var(--leading-tight)',
      color: 'var(--ink-800)',
      fontWeight: 500
    }
  }, r.pro))))), /*#__PURE__*/React.createElement("div", {
    "data-rv": true,
    style: {
      '--rd': '140ms',
      background: 'transparent',
      border: '1px solid var(--violet-200)',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6) var(--space-6) var(--space-4)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 'var(--text-h4)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--ink-500)'
    }
  }, "LCD \u2013 TV"), /*#__PURE__*/React.createElement(Badge, {
    tone: "outline",
    size: "sm",
    style: {
      color: 'var(--ink-400)',
      boxShadow: 'inset 0 0 0 2px var(--ink-200)'
    }
  }, "Consumer-Ger\xE4t")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--space-5) var(--space-6)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, ROWS.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "cmp-row",
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'flex-start',
      padding: '11px 10px',
      borderTop: i ? '1px solid var(--violet-100)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(Mark, {
    ok: false,
    d: `${240 + i * 55}ms`
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body-sm)',
      lineHeight: 'var(--leading-tight)',
      color: 'var(--ink-400)'
    }
  }, r.con))))));
}
const SIZES = [['size-32.png', '32”', 'Digitales Menüboard 32 Zoll', .62], ['size-55.png', '55”', 'Digitales Menüboard 55 Zoll', .84], ['size-65.png', '65”', 'Digitales Menüboard 65 Zoll', 1]];
function WarumSection() {
  return /*#__PURE__*/React.createElement("section", {
    id: "warum",
    "data-screen-label": "Warum HYSN",
    style: {
      background: 'var(--surface-footer)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--max-width-content)',
      margin: '0 auto',
      padding: 'var(--space-10) var(--gutter-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-rv": true,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      marginBottom: 'var(--space-8)',
      maxWidth: '56ch'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Der Unterschied zum Fernseher"), /*#__PURE__*/React.createElement(SectionHeading, {
    size: "sm"
  }, "Warum HYSN Digital Men\xFCboards?")), /*#__PURE__*/React.createElement(ComparisonModern, null), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-10)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-rv": true
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    size: "xs",
    as: "h3"
  }, "Weitere Gr\xF6ssen auf Anfrage")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      gap: 'var(--space-8)'
    },
    "data-grid": "sizes"
  }, SIZES.map(([src, label, alt, scale], i) => /*#__PURE__*/React.createElement("div", {
    key: label,
    "data-rv": true,
    style: {
      '--rd': `${i * 100}ms`,
      width: `${(scale / 2.46 * 100).toFixed(1)}%`,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("figure", {
    className: "hvc",
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      position: 'relative',
      background: 'linear-gradient(175deg,#3d3d44,#17171b 55%,#0b0b0e)',
      borderRadius: 9,
      padding: '4px 4px 13px',
      boxShadow: '0 30px 44px -22px rgba(0,0,0,.45), 0 10px 18px -12px rgba(0,0,0,.35)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: '0 0 auto 0',
      height: 1,
      borderRadius: '9px 9px 0 0',
      background: 'rgba(255,255,255,.22)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 5,
      overflow: 'hidden',
      background: '#000'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: '../../assets/imagery/site/' + src,
    alt: alt,
    style: {
      width: '100%',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(112deg,rgba(255,255,255,.13) 0%,rgba(255,255,255,.05) 26%,rgba(255,255,255,0) 44%)',
      pointerEvents: 'none'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '50%',
      bottom: 4,
      transform: 'translateX(-50%)',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-bold)',
      fontSize: 6,
      letterSpacing: '.22em',
      color: '#6b6b74',
      lineHeight: 1
    }
  }, "HYSN"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 8,
      bottom: 5,
      width: 3.5,
      height: 3.5,
      borderRadius: '50%',
      background: 'var(--green-500)',
      boxShadow: '0 0 5px var(--green-500)'
    }
  })), /*#__PURE__*/React.createElement("figcaption", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "subtle",
    size: "sm"
  }, label)))))))));
}
Object.assign(window, {
  WarumSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/hysn-website/WarumSection.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Select = __ds_scope.Select;

__ds_ns.SidebarNav = __ds_scope.SidebarNav;

__ds_ns.StatTile = __ds_scope.StatTile;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.UserChip = __ds_scope.UserChip;

__ds_ns.ContactFooter = __ds_scope.ContactFooter;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.PageIndicator = __ds_scope.PageIndicator;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.IconCircle = __ds_scope.IconCircle;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.BenefitStrip = __ds_scope.BenefitStrip;

__ds_ns.ComparisonTable = __ds_scope.ComparisonTable;

__ds_ns.DisplayFrame = __ds_scope.DisplayFrame;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.OfferCard = __ds_scope.OfferCard;

__ds_ns.PriceBlock = __ds_scope.PriceBlock;

__ds_ns.PromoSeal = __ds_scope.PromoSeal;

__ds_ns.StepFlow = __ds_scope.StepFlow;

})();
