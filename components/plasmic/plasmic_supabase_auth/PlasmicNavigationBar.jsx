// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: nT5KcU3zyMS2wxZ8Rc3Mjw
// Component: 0W22cQAiPzr5
import * as React from "react";
import { useRouter } from "next/router";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  useCurrentUser
} from "@plasmicapp/react-web";
import { useDataEnv, useGlobalActions } from "@plasmicapp/react-web/lib/host";
import Button from "../../Button"; // plasmic-import: v-0F0jw1XWqT/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_plasmic_supabase_auth.module.css"; // plasmic-import: nT5KcU3zyMS2wxZ8Rc3Mjw/projectcss
import sty from "./PlasmicNavigationBar.module.css"; // plasmic-import: 0W22cQAiPzr5/css

createPlasmicElementProxy;

export const PlasmicNavigationBar__VariantProps = new Array();

export const PlasmicNavigationBar__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicNavigationBar__RenderFunc(props) {
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
  const $globalActions = useGlobalActions?.();
  const currentUser = useCurrentUser?.() || {};
  return (
    <section
      data-plasmic-name={"navigationBar"}
      data-plasmic-override={overrides.navigationBar}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.navigationBar
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox___3N8Im)}>
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
          <React.Fragment>
            <span
              className={"plasmic_default__all plasmic_default__span"}
              style={{ fontStyle: "italic", fontWeight: 700, color: "#77FE9C" }}
            >
              {"supaplasm."}
            </span>
            <React.Fragment>{""}</React.Fragment>
            <span
              className={"plasmic_default__all plasmic_default__span"}
              style={{ fontWeight: 700, fontStyle: "italic" }}
            >
              {"auth"}
            </span>
          </React.Fragment>
        </h3>
        <div className={classNames(projectcss.all, sty.freeBox__fqds8)}>
          {(() => {
            try {
              return $ctx.SupabaseUser.user.email != null;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return false;
              }
              throw e;
            }
          })() ? (
            <Button
              className={classNames("__wab_instance", sty.button__pu1KQ)}
              onClick={async event => {
                const $steps = {};
                $steps["invokeGlobalAction"] = true
                  ? (() => {
                      const actionArgs = { args: [] };
                      return $globalActions[
                        "SupabaseUserGlobalContext.logout"
                      ]?.apply(null, [...actionArgs.args]);
                    })()
                  : undefined;
                if (
                  $steps["invokeGlobalAction"] != null &&
                  typeof $steps["invokeGlobalAction"] === "object" &&
                  typeof $steps["invokeGlobalAction"].then === "function"
                ) {
                  $steps["invokeGlobalAction"] = await $steps[
                    "invokeGlobalAction"
                  ];
                }
              }}
            >
              {"Sign out"}
            </Button>
          ) : null}
          {(() => {
            try {
              return $ctx.SupabaseUser.user.email == null;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return true;
              }
              throw e;
            }
          })() ? (
            <Button
              className={classNames("__wab_instance", sty.button__imZag)}
              link={`/login`}
            >
              {"Login"}
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}

const PlasmicDescendants = {
  navigationBar: ["navigationBar", "h3"],
  h3: ["h3"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicNavigationBar__ArgProps,
          internalVariantPropNames: PlasmicNavigationBar__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNavigationBar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "navigationBar") {
    func.displayName = "PlasmicNavigationBar";
  } else {
    func.displayName = `PlasmicNavigationBar.${nodeName}`;
  }
  return func;
}

export const PlasmicNavigationBar = Object.assign(
  // Top-level PlasmicNavigationBar renders the root element
  makeNodeComponent("navigationBar"),
  {
    // Helper components rendering sub-elements
    h3: makeNodeComponent("h3"),
    // Metadata about props expected for PlasmicNavigationBar
    internalVariantProps: PlasmicNavigationBar__VariantProps,
    internalArgProps: PlasmicNavigationBar__ArgProps
  }
);

export default PlasmicNavigationBar;
/* prettier-ignore-end */
