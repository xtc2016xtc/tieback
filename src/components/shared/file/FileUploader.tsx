

type FileUploaderProps = {
    fieldChange: (files: File[]) => void;
    mediaUrl: string;
};

const FileUploader = ({ fieldChange, mediaUrl }: FileUploaderProps) => {
    return (
        <div>
            File Uploader
        </div>
    )
}
export default FileUploader