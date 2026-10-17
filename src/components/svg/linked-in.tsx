import * as React from "react"
import { SVGProps } from "react"
const LinkedIn = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 48 48"
        fill="none"
        {...props}
    >
        <path
            fill="currentColor"
            d="M0 3.438C0 1.539 1.578 0 3.525 0h40.95C46.422 0 48 1.539 48 3.438v41.124C48 46.461 46.422 48 44.475 48H3.525C1.578 48 0 46.461 0 44.562V3.438Zm14.829 36.744V18.507H7.626v21.675h7.203Zm-3.6-24.636c2.511 0 4.074-1.662 4.074-3.744-.045-2.127-1.56-3.744-4.026-3.744-2.466 0-4.077 1.62-4.077 3.744 0 2.082 1.563 3.744 3.981 3.744h.048Zm14.724 24.636V28.077c0-.648.048-1.296.24-1.758.519-1.293 1.704-2.634 3.696-2.634 2.607 0 3.648 1.986 3.648 4.902v11.595h7.203V27.75c0-6.66-3.552-9.756-8.292-9.756-3.822 0-5.535 2.1-6.495 3.579v.075h-.048l.048-.075v-3.066h-7.2c.09 2.034 0 21.675 0 21.675h7.2Z"
            className={`${props.className} stroke-none!`}
        />
    </svg>
)
export default LinkedIn
