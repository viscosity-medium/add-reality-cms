import Image, {ImageProps} from "next/image";
import {FC, memo} from "react";

const NextImage: FC<ImageProps> = memo(({
    src,
    alt,
    ...otherProps
}) => {
    return (
        <Image
            src={src}
            alt={alt}
            {...otherProps}
        />
    );
});

NextImage.displayName="NextImage";

export default NextImage;