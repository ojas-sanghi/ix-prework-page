import {
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  query,
  getDocs,
} from "firebase/firestore";

import {firestore} from "../firebase/firebase";
import { Task } from "../models/task";

class TaskService {

  async createTask(task) {
    const collectionReference = collection(firestore, "tasks");
    const docRef =  await addDoc(collectionReference, {
      name: task.name,
      complete: task.complete,
    });
    task.id = docRef.id;
    return task;
  }

  async readTasks() {
    const collectionReference = collection(firestore, "tasks");
    const q = query(collectionReference);
    const querySnapshot = await getDocs(q);

    const tasks = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      let newTask = new Task(
        doc.id, 
        data.name, 
        data.complete
      );
      tasks.push(newTask);
    })
    return tasks;
  }

  async updateTask(task) {
    const docRef = doc(firestore, 'tasks', task.id);
    await updateDoc(docRef, {
      name: task.name,
      complete: task.complete,
    })
    return task;
  }

  async deleteTask(task) {
    const docRef = doc(firestore, 'tasks', task.id);
    await deleteDoc(docRef);
    return task;
  }
}

const service = new TaskService();

export default service;