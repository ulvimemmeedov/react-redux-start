import { Avatar } from "@material-tailwind/react";

export default function AvatarCompound({ url, src, alt, name }) {
    return (
        <a href={url} style={{ textDecoration: "none", color: "grey" }}>
            <Avatar src={src} alt={alt} />
            <h6>{name}</h6>
        </a>
    );
}