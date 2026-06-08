import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as Icons from './index';
const meta = {
    title: 'Formation Icons/All Icons'
};
export default meta;
export const Default = {
    render: () => (_jsx("div", { className: "grid grid-cols-6 gap-6 p-6", children: Object.entries(Icons).map(([name, Icon]) => (_jsxs("div", { className: "flex flex-col items-center gap-3 rounded border border-gray-200 p-4", children: [_jsx(Icon, {}), _jsx("span", { className: "text-center text-xs", children: name })] }, name))) }))
};
