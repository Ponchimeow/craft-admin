import { Editor, Element, Frame } from "@craftjs/core";
import { Layout, Tabs } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import CraftActionsPanel from "./CraftActionsPanel";
import CraftToolbox from "./CraftToolbox";
import CraftSettingsPanel from "./CraftSettingsPanel";
// import CraftButton from "craft-element/src/CraftButton";
// import CraftContainer from "craft-element/src/CraftContainer";
// import CraftButton from "./craft/CraftButton";
// import CraftContainer from "./craft/CraftContainer";
import CraftContainer from "lodestar-app-element/src/components/craft/CraftContainer";
import CraftButton from "lodestar-app-element/src/components/craft/CraftButton";

const StyledContent = styled.div`
  margin: 40px;
`;
const StyledScrollBar = styled.div`
  flex: 12;
  height: 100vh;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    -webkit-appearance: none;
  }
  ::-webkit-scrollbar:vertical {
    width: 11px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
const StyledTabs = styled(Tabs)`
  flex: 3;
  height: 100vh;
  overflow-y: scroll;
`;
const StyledTabBarWrapper = styled.div`
  background: #ffffff;

  .ant-tabs-tab {
    margin: 1em 1.5em;
    padding: 0 0;
  }
`;
const StyledTabsPane = styled(Tabs.TabPane)`
  background: #ffffff;
  .ant-tabs-content-holder {
    background: #ffffff;
  }
`;

const App: React.VFC = () => {
  const [activeKey, setActiveKey] = useState("component");

  return (
    <Editor
      resolver={{
        CraftContainer,
        CraftButton,
      }}
    >
      <div className="d-flex">
        <StyledScrollBar>
          <StyledContent>
            <Frame>
              <Element
                is={CraftContainer}
                padding={{}}
                canvas
                setActiveKey={setActiveKey}
              >
                <CraftButton
                  title="按鈕1"
                  link="https://demo.com"
                  openNewTab={true}
                  size="lg"
                  block={false}
                  variant="solid"
                  color="red"
                  setActiveKey={setActiveKey}
                />
                <CraftButton
                  title="按鈕2"
                  link="https://demo.com"
                  openNewTab={true}
                  size="lg"
                  block={false}
                  variant="solid"
                  color="#66b6b6"
                  setActiveKey={setActiveKey}
                />
              </Element>
            </Frame>
            <CraftActionsPanel />
          </StyledContent>
        </StyledScrollBar>

        <StyledTabs
          style={{ position: "relative" }}
          activeKey={activeKey || "component"}
          onChange={(key) => setActiveKey(key)}
          renderTabBar={(props, DefaultTabBar) => (
            <StyledTabBarWrapper>
              <DefaultTabBar {...props} className="mb-0" />
            </StyledTabBarWrapper>
          )}
        >
          <StyledTabsPane key="component" tab={<></>}>
            <CraftToolbox setActiveKey={setActiveKey} />
          </StyledTabsPane>
          <StyledTabsPane key="settings" tab={<></>}>
            <CraftSettingsPanel />
          </StyledTabsPane>
        </StyledTabs>
      </div>
    </Editor>
  );
};

export default App;
