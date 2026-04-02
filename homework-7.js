import { commentsSocialNetworks } from "./comments.js";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const filteredNumbers = numbers.filter((number) => {
  return number >= 5;
});

const fabrics = ["Шелк", "Хлопок","Бархат", "Твид"];
const hasSilk = fabrics.includes("Шелк");

const reverseMyData = (array) => [...array].reverse();

const reversedNumbers = reverseMyData(numbers);
const reversedFabrics = reverseMyData(fabrics);

const commentsfilteredByComEmail = commentsSocialNetworks.filter((comment) => {
  return comment.email.includes(".com");
});

const updatedComments = commentsSocialNetworks.map((comment) => ({
  ...comment,
  postId: comment.id <= 5 ? 2 : 1
}));

const commentNames = commentsSocialNetworks.map((comment) => ({
  id: comment.id,
  name: comment.name
}));

const validatedComments = commentsSocialNetworks.map((comment) => ({
  ...comment,
  isInvalid: comment.body.length > 180
}));

const commentEmailsByReduce = commentsSocialNetworks.reduce((accumulator, comment) => {
  accumulator.push(comment.email);
  return accumulator;
}, []);

const joinedEmails = commentEmailsByReduce.join(", ");