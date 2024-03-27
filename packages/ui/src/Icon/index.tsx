import React, { useId } from 'react';
import { clsxMerge } from '@exsui/utils';

import { InstallationIcon } from '../icons/InstallationIcon';
import { LightbulbIcon } from '../icons/LightbulbIcon';
import { PluginsIcon } from '../icons/PluginsIcon';
import { PresetsIcon } from '../icons/PresetsIcon';
import { ThemingIcon } from '../icons/ThemingIcon';
import { WarningIcon } from '../icons/WarningIcon';

export const icons = {
    installation: InstallationIcon,
    presets: PresetsIcon,
    plugins: PluginsIcon,
    theming: ThemingIcon,
    lightbulb: LightbulbIcon,
    warning: WarningIcon,
};

export const iconStyles = {
    blue: '[--icon-foreground:theme(colors.slate.900)] [--icon-background:theme(colors.white)]',
    amber: '[--icon-foreground:theme(colors.amber.900)] [--icon-background:theme(colors.amber.100)]',
};

export interface IconProps {
    color?: keyof typeof iconStyles;
    icon: keyof typeof icons;
    className?: string;
}
/**
 * Icon
 * @param {IconProps} {
 *  icon,
 * color = 'blue',
 * className,
 * ...props
 * }
 * @returns {JSX.Element}
 */
const Icon = React.forwardRef<SVGSVGElement, IconProps>(function Icon(
    { icon, color = 'blue', className, ...props }: IconProps,
    ref,
): JSX.Element {
    const id = useId();
    const IconComponent = icons[icon];

    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 32 32"
            fill="none"
            className={clsxMerge(className, iconStyles[color])}
            ref={ref}
            {...props}>
            <IconComponent
                id={id}
                color={color}
            />
        </svg>
    );
});

Icon.displayName = 'Icon';

export default Icon;

export const gradients = {
    blue: [{ stopColor: '#0EA5E9' }, { stopColor: '#22D3EE', offset: '.527' }, { stopColor: '#818CF8', offset: 1 }],
    amber: [
        { stopColor: '#FDE68A', offset: '.08' },
        { stopColor: '#F59E0B', offset: '.837' },
    ],
};

export function Gradient({
    color = 'blue',
    ...props
}: {
    color?: keyof typeof gradients;
} & Omit<React.ComponentPropsWithoutRef<'radialGradient'>, 'color'>) {
    return (
        <radialGradient
            cx={0}
            cy={0}
            r={1}
            gradientUnits="userSpaceOnUse"
            {...props}>
            {gradients[color].map((stop, stopIndex) => (
                <stop
                    key={stopIndex}
                    {...stop}
                />
            ))}
        </radialGradient>
    );
}

export function LightMode({ className, ...props }: React.ComponentPropsWithoutRef<'g'>) {
    return (
        <g
            className={clsxMerge('dark:hidden', className)}
            {...props}
        />
    );
}

export function DarkMode({ className, ...props }: React.ComponentPropsWithoutRef<'g'>) {
    return (
        <g
            className={clsxMerge('hidden dark:inline', className)}
            {...props}
        />
    );
}
