import { getGreeting } from './greetings/get-greeting.action'
import { getPostLikes } from './posts/get-post-likes.action'
import { updatePostLikes } from './posts/update-post-likes.action'

export const server = {
  getGreeting,

  // Posts
  getPostLikes,
  updatePostLikes,
}
