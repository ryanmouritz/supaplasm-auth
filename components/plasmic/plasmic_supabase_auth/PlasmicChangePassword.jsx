// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: nT5KcU3zyMS2wxZ8Rc3Mjw
// Component: hImsFKgCrESY
import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  generateOnMutateForSpec,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  initializeCodeComponentStates,
  useCurrentUser,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv, useGlobalActions } from "@plasmicapp/react-web/lib/host";
import NavigationBar from "../../NavigationBar"; // plasmic-import: 0W22cQAiPzr5/component
import Card from "../../Card"; // plasmic-import: DN4D9G0f1W-U/component
import { FormWrapper } from "@plasmicpkgs/antd5/skinny/Form";
import { formHelpers as FormWrapper_Helpers } from "@plasmicpkgs/antd5/skinny/Form";
import { FormItemWrapper } from "@plasmicpkgs/antd5/skinny/FormItem";
import { AntdInput } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdInput_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdPassword } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdPassword_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_plasmic_supabase_auth.module.css"; // plasmic-import: nT5KcU3zyMS2wxZ8Rc3Mjw/projectcss
import sty from "./PlasmicChangePassword.module.css"; // plasmic-import: hImsFKgCrESY/css

createPlasmicElementProxy;

export const PlasmicChangePassword__VariantProps = new Array();

export const PlasmicChangePassword__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicChangePassword__RenderFunc(props) {
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
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "form.value",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
        refName: "form",
        onMutate: generateOnMutateForSpec("value", FormWrapper_Helpers)
      },
      {
        path: "form.isSubmitting",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false,
        refName: "form",
        onMutate: generateOnMutateForSpec("isSubmitting", FormWrapper_Helpers)
      },
      {
        path: "input.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
        onMutate: generateOnMutateForSpec("value", AntdInput_Helpers)
      },
      {
        path: "passwordInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
        onMutate: generateOnMutateForSpec("value", AntdPassword_Helpers)
      },
      {
        path: "passwordInput2.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
        onMutate: generateOnMutateForSpec("value", AntdPassword_Helpers)
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
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicChangePassword.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicChangePassword.pageMetadata.title}
        />

        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicChangePassword.pageMetadata.title}
        />
      </Head>

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

          <div
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            className={classNames(projectcss.all, sty.freeBox)}
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
              <React.Fragment>
                <React.Fragment>{"Reset your "}</React.Fragment>
                <span
                  className={"plasmic_default__all plasmic_default__span"}
                  style={{ color: "var(--token-v3mSzz0hEJ6g)" }}
                >
                  {"supaplasm"}
                </span>
                <React.Fragment>{".auth account password"}</React.Fragment>
              </React.Fragment>
            </h3>
            <Card
              data-plasmic-name={"card"}
              data-plasmic-override={overrides.card}
              className={classNames("__wab_instance", sty.card)}
              noTitle={true}
            >
              {(() => {
                const child$Props = {
                  className: classNames("__wab_instance", sty.form),
                  extendedOnValuesChange:
                    generateStateOnChangePropForCodeComponents(
                      $state,
                      "value",
                      ["form", "value"],
                      FormWrapper_Helpers
                    ),
                  formItems: [
                    { label: "Name", name: "name", inputType: "Text" },
                    {
                      label: "Message",
                      name: "message",
                      inputType: "Text Area"
                    }
                  ],

                  initialValues: (() => {
                    try {
                      return {
                        email: $ctx.SupabaseUser.user.email,
                        password: "",
                        confirmPassword: ""
                      };
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return { email: "", password: "", confirmPassword: "" };
                      }
                      throw e;
                    }
                  })(),
                  labelCol: { span: 8, horizontalOnly: true },
                  layout: "vertical",
                  mode: "advanced",
                  onFinish: async values => {
                    const $steps = {};
                    $steps["invokeGlobalAction"] = true
                      ? (() => {
                          const actionArgs = {
                            args: [
                              (() => {
                                try {
                                  return $state.form.value.password;
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return undefined;
                                  }
                                  throw e;
                                }
                              })()
                            ]
                          };
                          return $globalActions[
                            "SupabaseUserGlobalContext.updateUserPassword"
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
                  },
                  onIsSubmittingChange:
                    generateStateOnChangePropForCodeComponents(
                      $state,
                      "isSubmitting",
                      ["form", "isSubmitting"],
                      FormWrapper_Helpers
                    ),
                  ref: ref => {
                    $refs["form"] = ref;
                  },
                  submitSlot: null,
                  wrapperCol: { span: 16, horizontalOnly: true }
                };
                initializeCodeComponentStates(
                  $state,
                  [
                    {
                      name: "value",
                      plasmicStateName: "form.value"
                    },
                    {
                      name: "isSubmitting",
                      plasmicStateName: "form.isSubmitting"
                    }
                  ],

                  [],
                  FormWrapper_Helpers ?? {},
                  child$Props
                );
                return (
                  <FormWrapper
                    data-plasmic-name={"form"}
                    data-plasmic-override={overrides.form}
                    {...child$Props}
                  >
                    <FormItemWrapper
                      className={classNames(
                        "__wab_instance",
                        sty.formField__urbn0
                      )}
                      initialValue={(() => {
                        try {
                          return $ctx.SupabaseUser.user.email;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return undefined;
                          }
                          throw e;
                        }
                      })()}
                      label={"Account"}
                      name={"email"}
                      noLabel={false}
                      shouldUpdate={false}
                    >
                      {(() => {
                        const child$Props = {
                          className: classNames("__wab_instance", sty.input),
                          disabled: true,
                          onChange: generateStateOnChangePropForCodeComponents(
                            $state,
                            "value",
                            ["input", "value"],
                            AntdInput_Helpers
                          ),
                          readOnly: false,
                          value: generateStateValueProp($state, [
                            "input",
                            "value"
                          ])
                        };
                        initializeCodeComponentStates(
                          $state,
                          [
                            {
                              name: "value",
                              plasmicStateName: "input.value"
                            }
                          ],

                          [],
                          AntdInput_Helpers ?? {},
                          child$Props
                        );
                        return (
                          <AntdInput
                            data-plasmic-name={"input"}
                            data-plasmic-override={overrides.input}
                            {...child$Props}
                          />
                        );
                      })()}
                    </FormItemWrapper>
                    <FormItemWrapper
                      className={classNames(
                        "__wab_instance",
                        sty.formField__xk5Ln
                      )}
                      label={"New Password"}
                      name={"password"}
                    >
                      {(() => {
                        const child$Props = {
                          className: classNames(
                            "__wab_instance",
                            sty.passwordInput
                          ),
                          onChange: generateStateOnChangePropForCodeComponents(
                            $state,
                            "value",
                            ["passwordInput", "value"],
                            AntdPassword_Helpers
                          ),
                          value: generateStateValueProp($state, [
                            "passwordInput",
                            "value"
                          ])
                        };
                        initializeCodeComponentStates(
                          $state,
                          [
                            {
                              name: "value",
                              plasmicStateName: "passwordInput.value"
                            }
                          ],

                          [],
                          AntdPassword_Helpers ?? {},
                          child$Props
                        );
                        return (
                          <AntdPassword
                            data-plasmic-name={"passwordInput"}
                            data-plasmic-override={overrides.passwordInput}
                            {...child$Props}
                          />
                        );
                      })()}
                    </FormItemWrapper>
                    <FormItemWrapper
                      className={classNames(
                        "__wab_instance",
                        sty.formField__flq
                      )}
                      label={"Confirm Password"}
                      name={"confirmPassword"}
                      rules={[
                        {
                          ruleType: "advanced",
                          custom: (rule, value) => {
                            return (
                              $state.form.value.password ==
                              $state.form.value.confirmPassword
                            );
                          },
                          message: "Passwords must match."
                        }
                      ]}
                    >
                      {(() => {
                        const child$Props = {
                          className: classNames(
                            "__wab_instance",
                            sty.passwordInput2
                          ),
                          onChange: generateStateOnChangePropForCodeComponents(
                            $state,
                            "value",
                            ["passwordInput2", "value"],
                            AntdPassword_Helpers
                          ),
                          value: generateStateValueProp($state, [
                            "passwordInput2",
                            "value"
                          ])
                        };
                        initializeCodeComponentStates(
                          $state,
                          [
                            {
                              name: "value",
                              plasmicStateName: "passwordInput2.value"
                            }
                          ],

                          [],
                          AntdPassword_Helpers ?? {},
                          child$Props
                        );
                        return (
                          <AntdPassword
                            data-plasmic-name={"passwordInput2"}
                            data-plasmic-override={overrides.passwordInput2}
                            {...child$Props}
                          />
                        );
                      })()}
                    </FormItemWrapper>
                    <AntdButton
                      data-plasmic-name={"button"}
                      data-plasmic-override={overrides.button}
                      className={classNames("__wab_instance", sty.button)}
                      size={"large"}
                      submitsForm={true}
                      type={"primary"}
                    >
                      <div
                        data-plasmic-name={"text"}
                        data-plasmic-override={overrides.text}
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text
                        )}
                      >
                        {"Reset Password"}
                      </div>
                    </AntdButton>
                  </FormWrapper>
                );
              })()}
            </Card>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "navigationBar",
    "freeBox",
    "h3",
    "card",
    "form",
    "input",
    "passwordInput",
    "passwordInput2",
    "button",
    "text"
  ],

  navigationBar: ["navigationBar"],
  freeBox: [
    "freeBox",
    "h3",
    "card",
    "form",
    "input",
    "passwordInput",
    "passwordInput2",
    "button",
    "text"
  ],

  h3: ["h3"],
  card: [
    "card",
    "form",
    "input",
    "passwordInput",
    "passwordInput2",
    "button",
    "text"
  ],

  form: ["form", "input", "passwordInput", "passwordInput2", "button", "text"],
  input: ["input"],
  passwordInput: ["passwordInput"],
  passwordInput2: ["passwordInput2"],
  button: ["button", "text"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicChangePassword__ArgProps,
          internalVariantPropNames: PlasmicChangePassword__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicChangePassword__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicChangePassword";
  } else {
    func.displayName = `PlasmicChangePassword.${nodeName}`;
  }
  return func;
}

export const PlasmicChangePassword = Object.assign(
  // Top-level PlasmicChangePassword renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navigationBar: makeNodeComponent("navigationBar"),
    freeBox: makeNodeComponent("freeBox"),
    h3: makeNodeComponent("h3"),
    card: makeNodeComponent("card"),
    form: makeNodeComponent("form"),
    input: makeNodeComponent("input"),
    passwordInput: makeNodeComponent("passwordInput"),
    passwordInput2: makeNodeComponent("passwordInput2"),
    button: makeNodeComponent("button"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicChangePassword
    internalVariantProps: PlasmicChangePassword__VariantProps,
    internalArgProps: PlasmicChangePassword__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "Change Password - Supaplasm.auth",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicChangePassword;
/* prettier-ignore-end */
