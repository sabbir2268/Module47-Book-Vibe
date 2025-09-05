import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const getStoredBook = () => {
  const storedBookSTR = localStorage.getItem("readlist");

  if (storedBookSTR) {
    const storedBookData = JSON.parse(storedBookSTR);
    return storedBookData;
  } else {
    return [];
  }
};

const addToStoredDB = (bookId) => {
  const storedBookData = getStoredBook();

  if (storedBookData.includes(bookId)) {
    MySwal.fire({
      icon: "error",
      title: "Oops...",
      text: "It's Already in the Read List!",
      footer: '<a href="#">Why do I have this issue?</a>',
    });
  } else {
    storedBookData.push(bookId);
    localStorage.setItem("readlist", JSON.stringify(storedBookData));
  }
  // console.log(storedBookData);
};

export { addToStoredDB, getStoredBook };
