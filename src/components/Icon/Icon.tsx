import React from 'react';

import Settings from './Settings';
import Spinner from './Spinner';
import ArrowLeft from './ArrowLeft';
import Refresh from './Refresh';

const icons = {
    arrowleft: ArrowLeft,
    refresh: Refresh,
    settings: Settings,
    spinner: Spinner,
};

export type Icons = keyof typeof icons;

type Props = {
    name: Icons;
    stroke?: string;
    fill?: string;
    hoverFill?: string;
    hoverStroke?: string;
    strokeWidth?: string;
    className?: string;
};

const Icon: React.FC<Props> = ({ name, ...rest }) => {
    return <div {...rest}>{React.createElement(icons[name])}</div>;
};

export default Icon;
