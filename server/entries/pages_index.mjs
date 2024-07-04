import { i as import1 } from "../chunks/chunk-CoOqPey3.js";
import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import "react-dom/server";
import "react";
import "prop-types";
import "vike/server";
function Page() {
  const skills = ["HTML", "CSS", "JavaScript", "RestAPI", "React", "Node.js"];
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "bg-gray-100 text-gray-800 font-sans leading-relaxed", children: [
    /* @__PURE__ */ jsxs("header", { className: "bg-blue-900 text-white p-6 shadow-md flex flex-col items-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold", children: "Your Name" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg mt-2", children: "Your Job Title" })
    ] }),
    /* @__PURE__ */ jsxs("main", { className: "p-6 max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxs("section", { className: "mb-10", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold border-b-4 border-blue-900 pb-2 mb-4", children: "Profile" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg", children: "Experienced professional in [Your Field] with a passion for [Your Passion]. Proven track record in [Your Achievements]. Excellent skills in [Your Skills]." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-10", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold border-b-4 border-blue-900 pb-2 mb-4", children: "Experience" }),
        /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold", children: "Job Title - Company Name" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-700 italic mb-2", children: "Dates of Employment" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 text-lg", children: [
            /* @__PURE__ */ jsx("li", { children: "Key responsibility or achievement #1" }),
            /* @__PURE__ */ jsx("li", { children: "Key responsibility or achievement #2" }),
            /* @__PURE__ */ jsx("li", { children: "Key responsibility or achievement #3" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-10", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold border-b-4 border-blue-900 pb-2 mb-4", children: "Education" }),
        /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold", children: "Degree - University Name" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-700 italic mb-2", children: "Dates of Attendance" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg", children: "Relevant coursework or achievements." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-10", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold border-b-4 border-blue-900 pb-2 mb-4", children: "Skills" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: skills.map((skill, index) => /* @__PURE__ */ jsx("span", { className: "bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold", children: skill }, index)) })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-10", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold border-b-4 border-blue-900 pb-2 mb-4", children: "Contact" }),
        /* @__PURE__ */ jsxs("p", { className: "text-lg", children: [
          "Email: ",
          /* @__PURE__ */ jsx("a", { href: "mailto:your.email@example.com", className: "text-blue-700", children: "your.email@example.com" })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-lg", children: [
          "Phone: ",
          /* @__PURE__ */ jsx("a", { href: "tel:+1234567890", className: "text-blue-700", children: "+1234567890" })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-lg", children: [
          "LinkedIn: ",
          /* @__PURE__ */ jsx("a", { href: "https://www.linkedin.com/in/yourprofile", className: "text-blue-700", children: "linkedin.com/in/yourprofile" })
        ] })
      ] })
    ] })
  ] }) });
}
const import2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Page
}, Symbol.toStringTag, { value: "Module" }));
const configValuesSerialized = {
  ["onRenderHtml"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "/renderer/+onRenderHtml.jsx", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import1
    }
  },
  ["Page"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "/pages/index/+Page.jsx", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import2
    }
  }
};
export {
  configValuesSerialized
};
