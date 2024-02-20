import { classNames } from "utils/class-names"
import './Skeleton.css';

type SkeletonProps = {
    className?: string
}

export function Skeleton({ className: propClassName }: SkeletonProps) {
    const className = classNames({
        skeleton: true,
        [propClassName!]: !!propClassName
    })

    return <div className={className}><div className="skeleton__content" /></div>
}