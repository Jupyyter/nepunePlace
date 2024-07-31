interface FileSystemFileHandle {
       getFile(): Promise<File>;
       createWritable(): Promise<FileSystemWritableFileStream>;
     }
     
     interface FileSystemWritableFileStream extends WritableStream {
       write(data: BufferSource | Blob | string): Promise<void>;
       seek(position: number): Promise<void>;
       truncate(size: number): Promise<void>;
     }
     
     interface Window {
       showSaveFilePicker(options?: {
         suggestedName?: string;
         types?: Array<{
           description?: string;
           accept: Record<string, string[]>;
         }>;
       }): Promise<FileSystemFileHandle>;
     }