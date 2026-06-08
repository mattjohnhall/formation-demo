import { jsx as _jsx } from "react/jsx-runtime";
import * as Icons from './index';
const iconNames = Object.keys(Icons);
const meta = {
    title: 'Formation Icons/Playground',
    argTypes: {
        name: {
            control: 'select',
            options: iconNames
        },
        fontSize: {
            control: 'select',
            options: [
                'inherit',
                'small',
                'medium',
                'large'
            ]
        }
    }
};
export default meta;
export const Default = {
    args: {
        name: iconNames[0],
        fontSize: 'medium'
    },
    render: ({ name, fontSize }) => {
        const Icon = Icons[name];
        return (_jsx("div", { className: "flex items-center justify-center p-10", children: _jsx(Icon, { fontSize: fontSize }) }));
    }
};
