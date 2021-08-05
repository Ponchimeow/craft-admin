import { useEditor } from "@craftjs/core";
import { Button } from "antd";
import React from "react";

const CraftSettingsPanel: React.VFC = () => {
  const { selected, actions } = useEditor((state) => {
    const currentNodeId = state.events.selected;
    let selected;
    if (currentNodeId) {
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        settings:
          state.nodes[currentNodeId].related &&
          state.nodes[currentNodeId].related.settings,
        labelName: state.nodes[currentNodeId].data?.custom?.button?.label,
      };
    }
    return {
      selected,
    };
  });

  return (
    <div className="px-3 mb-4">
      {selected &&
        selected.settings &&
        React.createElement(selected.settings, { color: "red" })}
      {selected && selected.labelName && (
        <Button
          block
          onClick={() => {
            window.alert("確定刪除嗎");
            actions.delete(selected.id);
          }}
        >
          delete
        </Button>
      )}
    </div>
  );
};

export default CraftSettingsPanel;
