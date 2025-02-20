interface ClipboardProps {
    width: string,
    height: string,
    fill: string,
}

export const ClipboardIcon: React.FC<ClipboardProps> = ({ width, height, fill }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 32 32" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" fill={fill}>
            <path className="cls-1" d="M25,7H23.82A3,3,0,0,0,21,5H20a3,3,0,0,0-3-3H15a3,3,0,0,0-3,3H11A3,3,0,0,0,8.18,7H7A2,2,0,0,0,5,9V28a2,2,0,0,0,2,2H25a2,2,0,0,0,2-2V9A2,2,0,0,0,25,7ZM11,7h1a2,2,0,0,0,2-2,1,1,0,0,1,1-1h2a1,1,0,0,1,1,1,2,2,0,0,0,2,2h1a1,1,0,0,1,1,1V9H10V8A1,1,0,0,1,11,7ZM25,28H7V9H8a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2h1Z" />
            <path className="cls-1" d="M22,13H10a1,1,0,0,0,0,2H22a1,1,0,0,0,0-2Z" />
            <path className="cls-1" d="M22,18H10a1,1,0,0,0,0,2H22a1,1,0,0,0,0-2Z" />
            <path className="cls-1" d="M16,23H10a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z" />
            <path className="cls-1" d="M15.29,6.71A1,1,0,0,0,16,7l.19,0a.6.6,0,0,0,.19-.06.56.56,0,0,0,.17-.09l.16-.12a1,1,0,0,0,.21-.33A1,1,0,0,0,17,6a1.36,1.36,0,0,0,0-.2.64.64,0,0,0-.06-.18.76.76,0,0,0-.09-.18l-.12-.15a1,1,0,0,0-1.42,0A1,1,0,0,0,15,6a1,1,0,0,0,.08.38A1,1,0,0,0,15.29,6.71Z" />
        </svg>
    )
}