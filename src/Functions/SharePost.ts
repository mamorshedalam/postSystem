import Post from "../Models/post";
import { convertToBase64 } from "./ConvertImg";

export default async function sharePost(
  this: HTMLFormElement,
  event: Event
): Promise<void> {
  event.preventDefault();

  const titleInput = document.getElementById("x-postTitle") as HTMLInputElement;
  const detailInput = document.getElementById(
    "x-postDetail"
  ) as HTMLTextAreaElement;
  const imgInput = document.getElementById("x-postImage") as HTMLInputElement;
  const imgFile = imgInput.files ? imgInput.files[0] : null;

  const title = titleInput.value;
  const description = detailInput.value;

  const createPost = async () => {
    let imageBase64: string | null = null;

    if (imgFile) {
      try {
        imageBase64 = await convertToBase64(imgFile);
      } catch (error) {
        console.error("Error converting image to Base64");
      }
    }

    const post: Post = {
      title,
      description,
      imageBase64,
    };
  };
  createPost();
}
