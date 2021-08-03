import { useEditor } from "@craftjs/core";
import CraftButton from "craft-element/src/CraftButton";
import React from "react";
import styled from "styled-components";

const StyledBoxWrapper = styled.div`
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
`;

const CraftToolbox: React.VFC<{
  setActiveKey: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setActiveKey }) => {
  const { connectors } = useEditor();

  return (
    <div className="px-3 mt-4">
      <StyledBoxWrapper
        className="mb-3"
        ref={(ref) =>
          ref &&
          connectors.create(
            ref,
            <CraftButton
              title="按鈕"
              link="https://demo.com"
              openNewTab={true}
              size="lg"
              block={false}
              variant="solid"
              color="#cfc"
              setActiveKey={setActiveKey}
            />
          )
        }
      >
        按鈕
      </StyledBoxWrapper>
    </div>
  );
};

export default CraftToolbox;
