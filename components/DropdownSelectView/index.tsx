import classnames from "classnames/bind";
import React from "react";
import style from "./DropdownSelectView.module.scss";

const cx = classnames.bind(style);

interface DropdownSelectViewProps {
  optionList: any[];
  showOptions: boolean;
  onClickOption: any;
  onClickSelect: any;
}

export const DropdownSelectView = ({ showOptions, optionList, onClickOption, onClickSelect }: DropdownSelectViewProps) => {
  return (
    <>
      <div className={cx("container")}>
        {/* [D] 필터 확장/축소 isExpanded로 제어 */}
        {/* [D] 옵션 리스트에서 선택된 텍스트로 변경해주세요 */}
        <button type="button" className={cx("button_filter")} aria-expanded={true} onClick={() => onClickSelect()}>
          EN
        </button>
        {showOptions && (
          <ul className={cx("option_list")} role={"listbox"}>
            {optionList.map((option, i) => (
              <li key={i} className={cx("option_item")} role={"presentation"}>
                <button type="button" className={cx("option_button")} key={i} onClick={() => onClickOption(option.value)}>
                  {option.value}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
