// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: nT5KcU3zyMS2wxZ8Rc3Mjw
// Component: MLlkIg1349ad
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
import NavigationBar from "../../NavigationBar"; // plasmic-import: 0W22cQAiPzr5/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_plasmic_supabase_auth.module.css"; // plasmic-import: nT5KcU3zyMS2wxZ8Rc3Mjw/projectcss
import sty from "./PlasmicUnprotected.module.css"; // plasmic-import: MLlkIg1349ad/css

createPlasmicElementProxy;

export const PlasmicUnprotected__VariantProps = new Array();

export const PlasmicUnprotected__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicUnprotected__RenderFunc(props) {
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
          <NavigationBar
            data-plasmic-name={"navigationBar"}
            data-plasmic-override={overrides.navigationBar}
            className={classNames("__wab_instance", sty.navigationBar)}
          />

          <h3
            data-plasmic-name={"h3"}
            data-plasmic-override={overrides.h3}
            className={classNames(
              projectcss.all,
              projectcss.h3,
              projectcss.__wab_text,
              sty.h3
            )}
            onClick={async event => {
              const $steps = {};
            }}
          >
            {"This page is unprotected."}
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
            {
              "Anybody can see this page whether they are logged in or not. Nothing to hide here!"
            }
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "navigationBar", "h3", "text"],
  navigationBar: ["navigationBar"],
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
          internalArgPropNames: PlasmicUnprotected__ArgProps,
          internalVariantPropNames: PlasmicUnprotected__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicUnprotected__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicUnprotected";
  } else {
    func.displayName = `PlasmicUnprotected.${nodeName}`;
  }
  return func;
}

export const PlasmicUnprotected = Object.assign(
  // Top-level PlasmicUnprotected renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navigationBar: makeNodeComponent("navigationBar"),
    h3: makeNodeComponent("h3"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicUnprotected
    internalVariantProps: PlasmicUnprotected__VariantProps,
    internalArgProps: PlasmicUnprotected__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicUnprotected;
/* prettier-ignore-end */
