// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: nT5KcU3zyMS2wxZ8Rc3Mjw
// Component: njdBZhMB_s6c
import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  useCurrentUser
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_plasmic_supabase_auth.module.css"; // plasmic-import: nT5KcU3zyMS2wxZ8Rc3Mjw/projectcss
import sty from "./PlasmicProtected.module.css"; // plasmic-import: njdBZhMB_s6c/css

createPlasmicElementProxy;

export const PlasmicProtected__VariantProps = new Array();

export const PlasmicProtected__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicProtected__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = useCurrentUser?.() || {};
  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            sty.root
          )}
        >
          <h3
            data-plasmic-name={"h3"}
            data-plasmic-override={overrides.h3}
            className={classNames(
              projectcss.all,
              projectcss.h3,
              projectcss.__wab_text,
              sty.h3
            )}
          >
            {"This page is protected."}
          </h3>
          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text
            )}
          >
            <React.Fragment>
              {(() => {
                try {
                  return (
                    "You can see it because you are logged in as " +
                    $ctx.SupabaseUser.user.email +
                    ". Super secret stuff!"
                  );
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "You can see it because you are logged in as . Super secret stuff!";
                  }
                  throw e;
                }
              })()}
            </React.Fragment>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "h3", "text"],
  h3: ["h3"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicProtected__ArgProps,
          internalVariantPropNames: PlasmicProtected__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicProtected__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProtected";
  } else {
    func.displayName = `PlasmicProtected.${nodeName}`;
  }
  return func;
}

export const PlasmicProtected = Object.assign(
  // Top-level PlasmicProtected renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h3: makeNodeComponent("h3"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicProtected
    internalVariantProps: PlasmicProtected__VariantProps,
    internalArgProps: PlasmicProtected__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicProtected;
/* prettier-ignore-end */
