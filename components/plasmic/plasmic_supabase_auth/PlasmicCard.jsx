// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: nT5KcU3zyMS2wxZ8Rc3Mjw
// Component: DN4D9G0f1W-U
import * as React from "react";
import { useRouter } from "next/router";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  hasVariant,
  renderPlasmicSlot,
  useCurrentUser,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_plasmic_supabase_auth.module.css"; // plasmic-import: nT5KcU3zyMS2wxZ8Rc3Mjw/projectcss
import sty from "./PlasmicCard.module.css"; // plasmic-import: DN4D9G0f1W-U/css

createPlasmicElementProxy;

export const PlasmicCard__VariantProps = new Array("noTitle");

export const PlasmicCard__ArgProps = new Array("children", "title");

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCard__RenderFunc(props) {
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
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "noTitle",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.noTitle
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  return (
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
      <div
        data-plasmic-name={"header"}
        data-plasmic-override={overrides.header}
        className={classNames(projectcss.all, sty.header, {
          [sty.headernoTitle]: hasVariant($state, "noTitle", "noTitle")
        })}
      >
        <div
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          className={classNames(projectcss.all, sty.freeBox, {
            [sty.freeBoxnoTitle]: hasVariant($state, "noTitle", "noTitle")
          })}
        >
          {renderPlasmicSlot({
            defaultContents: "Card title",
            value: args.title,
            className: classNames(sty.slotTargetTitle)
          })}
        </div>
      </div>
      <div
        data-plasmic-name={"body"}
        data-plasmic-override={overrides.body}
        className={classNames(projectcss.all, sty.body, {
          [sty.bodynoTitle]: hasVariant($state, "noTitle", "noTitle")
        })}
      >
        {renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__yiqRm
                )}
              >
                {"something here"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__hnZi
                )}
              >
                {"something here"}
              </div>
            </React.Fragment>
          ),

          value: args.children
        })}
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "header", "freeBox", "body"],
  header: ["header", "freeBox"],
  freeBox: ["freeBox"],
  body: ["body"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicCard__ArgProps,
          internalVariantPropNames: PlasmicCard__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCard";
  } else {
    func.displayName = `PlasmicCard.${nodeName}`;
  }
  return func;
}

export const PlasmicCard = Object.assign(
  // Top-level PlasmicCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    freeBox: makeNodeComponent("freeBox"),
    body: makeNodeComponent("body"),
    // Metadata about props expected for PlasmicCard
    internalVariantProps: PlasmicCard__VariantProps,
    internalArgProps: PlasmicCard__ArgProps
  }
);

export default PlasmicCard;
/* prettier-ignore-end */
