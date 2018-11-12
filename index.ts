import { prisma } from "./generated/prisma-client";

async function main() {
  const newUser = await prisma.createUser({
    name: "New User",
    email: "mail@mail.com",
    posts: {
      create: {
        title: "Post Title Example"
      }
    }
  });
  console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`);

  const allUsers = await prisma.users();
  console.log(allUsers);

  const allPosts = await prisma.posts();
  console.log(allPosts);

  const user = await prisma.user({ id: "cjodi17a6000d0713ck6tc4hk" });
  console.log(user);

  const userByName = await prisma.users({ where: { name: "New User" } });
  console.log(userByName);

  const updatedUser = await prisma.updateUser({
    where: { id: "cjodi17a6000d0713ck6tc4hk" },
    data: { name: "Updated" }
  });
  console.log(updatedUser);

  const deletedUser = await prisma.deleteUser({
    id: "cjodj7tff000j07135jvduj2f"
  });
  console.log(deletedUser);

  const postByUser = await prisma.user({email: "New User"}).posts();
  console.log(`All posts by that user: ${JSON.stringify(postByUser)}`);
}

main().catch(e => console.error(e));
