import React from 'react'

export default (tag) => {
  return (rules, ...args) => {
    const css = rules.reduce((css, current, index) => {
      return css + args?.[index-1] + current
    })
    const style = document.createElement("style");
    document.head.appendChild(style);
    const className = `css-${crypto.randomUUID()}`
    const rule = `.${className} { ${css} }`;
    style?.sheet?.insertRule(rule);
    return (props) => React.createElement(tag, { className, ...props });
  }
}
