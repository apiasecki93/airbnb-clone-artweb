'use client';
import Image from 'next/image'


interface AvatarProps {
    src: string | null | undefined;
    alt?: string;
    height?: number;
    width?: number;
}


const Avatar: React.FC<AvatarProps>= ({src}) => {
    return (
        <Image className="rounded-full" height="30" width="30" alt="Avatar" src={src || "/images/placeholder.jpg"} />
    )
}

export default Avatar