// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: nT5KcU3zyMS2wxZ8Rc3Mjw
// Component: WI_OIixjGUBY
import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  useCurrentUser
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv
} from "@plasmicapp/react-web/lib/host";
import NavigationBar from "../../NavigationBar"; // plasmic-import: 0W22cQAiPzr5/component
import { TestDataProvider } from "../../TestDataProvider"; // plasmic-import: Dtk_LXGErFfR/codeComponent
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_plasmic_supabase_auth.module.css"; // plasmic-import: nT5KcU3zyMS2wxZ8Rc3Mjw/projectcss
import sty from "./PlasmicStorageSandpit.module.css"; // plasmic-import: WI_OIixjGUBY/css

createPlasmicElementProxy;

export const PlasmicStorageSandpit__VariantProps = new Array();

export const PlasmicStorageSandpit__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicStorageSandpit__RenderFunc(props) {
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

          <TestDataProvider
            data-plasmic-name={"testDataProvider"}
            data-plasmic-override={overrides.testDataProvider}
            className={classNames("__wab_instance", sty.testDataProvider)}
          >
            <DataCtxReader__>
              {$ctx => (
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
                        return undefined;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return "";
                        }
                        throw e;
                      }
                    })()}
                  </React.Fragment>
                </div>
              )}
            </DataCtxReader__>
          </TestDataProvider>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "navigationBar", "testDataProvider", "text"],
  navigationBar: ["navigationBar"],
  testDataProvider: ["testDataProvider", "text"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicStorageSandpit__ArgProps,
          internalVariantPropNames: PlasmicStorageSandpit__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicStorageSandpit__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicStorageSandpit";
  } else {
    func.displayName = `PlasmicStorageSandpit.${nodeName}`;
  }
  return func;
}

export const PlasmicStorageSandpit = Object.assign(
  // Top-level PlasmicStorageSandpit renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navigationBar: makeNodeComponent("navigationBar"),
    testDataProvider: makeNodeComponent("testDataProvider"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicStorageSandpit
    internalVariantProps: PlasmicStorageSandpit__VariantProps,
    internalArgProps: PlasmicStorageSandpit__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicStorageSandpit;
/* prettier-ignore-end */
