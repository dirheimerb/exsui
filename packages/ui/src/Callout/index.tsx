'use client';
import React from 'react';
import clsx from 'clsx';
import Icon from '../Icon';

export const styles = {
    note: {
        container: 'bg-sky-50 dark:bg-slate-800/60 dark:ring-1 dark:ring-slate-300/10',
        title: 'text-sky-900 dark:text-sky-400',
        body: 'text-sky-800 [--tw-prose-background:theme(colors.sky.50)] prose-a:text-sky-900 prose-code:text-sky-900 dark:text-slate-300 dark:prose-code:text-slate-300',
    },
    warning: {
        container: 'bg-amber-50 dark:bg-slate-800/60 dark:ring-1 dark:ring-slate-300/10',
        title: 'text-amber-900 dark:text-amber-500',
        body: 'text-amber-800 [--tw-prose-underline:theme(colors.amber.400)] [--tw-prose-background:theme(colors.amber.50)] prose-a:text-amber-900 prose-code:text-amber-900 dark:text-slate-300 dark:[--tw-prose-underline:theme(colors.sky.700)] dark:prose-code:text-slate-300',
    },
};

export const icons = {
    note: (props: { className?: string }) => (
        <Icon
            icon="lightbulb"
            {...props}
        />
    ),
    warning: (props: { className?: string }) => (
        <Icon
            icon="warning"
            color="amber"
            {...props}
        />
    ),
};

export interface CalloutProps {
    title: string;
    children: React.ReactNode;
    type?: keyof typeof styles;
}
/**
 *  Callout
 * @param {CalloutProps} { title, children, type = 'note' }
 * @returns {JSX.Element}
 */
const Callout = React.forwardRef<HTMLDivElement, CalloutProps>(function Callout(
    { title, children, type = 'note' }: CalloutProps,
    ref,
): JSX.Element {
    const IconComponent = icons[type];

    return (
        <div
            className={clsx('my-8 flex rounded-3xl p-6', styles[type].container)}
            ref={ref}>
            <IconComponent className="h-8 w-8 flex-none" />
            <div className="ml-4 flex-auto">
                <p className={clsx('font-display m-0 text-xl', styles[type].title)}>{title}</p>
                <div className={clsx('prose mt-2.5', styles[type].body)}>{children}</div>
            </div>
        </div>
    );
});

Callout.displayName = 'Callout';

export default Callout;
