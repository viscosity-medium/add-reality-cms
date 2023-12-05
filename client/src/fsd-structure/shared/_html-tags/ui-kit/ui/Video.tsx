import {DetailedHTMLProps, FC, VideoHTMLAttributes} from "react";

interface VideoProps extends DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement> {}

const Video: FC<VideoProps> = ({
    src,
    className,
    ...otherProps
}) => {
    return (
        <video
            src={src}
            className={className}
            {...otherProps}
        />
    );
};

export default Video;