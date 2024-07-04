import { jsx, jsxs } from "react/jsx-runtime";
import ReactDOMServer from "react-dom/server";
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { escapeInject, dangerouslySkipEscape } from "vike/server";
let childrenPropType = PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired;
const logoUrl = "/mahyarcv/assets/static/logo.Ck4htcyc.png";
const Context = React.createContext(void 0);
PageContextProvider.propTypes = {
  pageContext: PropTypes.any,
  children: childrenPropType
};
function PageContextProvider({ pageContext, children }) {
  return /* @__PURE__ */ jsx(Context.Provider, { value: pageContext, children });
}
function usePageContext() {
  const pageContext = useContext(Context);
  return pageContext;
}
Layout.propTypes = {
  pageContext: PropTypes.any,
  children: childrenPropType
};
function Layout({ pageContext, children }) {
  return /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsxs(PageContextProvider, { pageContext, children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(Frame, { children: /* @__PURE__ */ jsx(Content, { children }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] }) });
}
Frame.propTypes = {
  children: childrenPropType
};
function Frame({ children }) {
  return /* @__PURE__ */ jsx("div", { className: "max-w-10xl mx-auto flex", children });
}
Content.propTypes = {
  children: childrenPropType
};
function Content({ children }) {
  return /* @__PURE__ */ jsx("div", { id: "page-container", children: /* @__PURE__ */ jsx(
    "div",
    {
      id: "page-content",
      style: {
        padding: 20,
        paddingBottom: 50,
        minHeight: "100vh"
      },
      children
    }
  ) });
}
function Header() {
  return /* @__PURE__ */ jsx("header", { className: "bg-blue-600 text-white p-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto flex justify-between items-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
      /* @__PURE__ */ jsx("img", { src: logoUrl, height: 40, width: 40, alt: "logo", className: "h-10 w-10" }),
      /* @__PURE__ */ jsx("nav", { className: "space-x-4", children: /* @__PURE__ */ jsx("span", { className: "text-white", children: "Home" }) })
    ] }),
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "https://t.me/yourTelegramUsername",
        className: "bg-white text-blue-600 px-4 py-2 rounded-full shadow-lg hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-300 transition transform hover:-translate-y-1 hover:scale-105",
        children: "Contact"
      }
    )
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "bg-gray-800 text-white p-4 mt-12", children: /* @__PURE__ */ jsx("div", { className: "max-w-5xl mx-auto flex justify-between items-center", children: /* @__PURE__ */ jsx("p", { children: "© 2024 Your Company" }) }) });
}
function getPageTitle(pageContext) {
  var _a;
  const title = (
    // Title defined dynamically by data()
    ((_a = pageContext.data) == null ? void 0 : _a.title) || // Title defined statically by /pages/some-page/+title.js (or by `export default { title }` in /pages/some-page/+config.js)
    // The setting 'pageContext.config.title' is a custom setting we defined at ./+config.ts
    pageContext.config.title || "My Portofolio"
  );
  return title;
}
function onRenderHtml(pageContext) {
  var _a;
  const { Page } = pageContext;
  if (!Page) throw new Error("My onRenderHtml() hook expects pageContext.Page to be defined");
  const pageHtml = ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(Layout, { pageContext, children: /* @__PURE__ */ jsx(Page, {}) })
  );
  const title = getPageTitle(pageContext);
  const desc = ((_a = pageContext.data) == null ? void 0 : _a.description) || pageContext.config.description || "Demo of using Vike";
  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
  return {
    documentHtml,
    pageContext: {
      // We can add custom pageContext properties here, see https://vike.dev/pageContext#custom
    }
  };
}
const import1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  onRenderHtml
}, Symbol.toStringTag, { value: "Module" }));
export {
  import1 as i,
  usePageContext as u
};
