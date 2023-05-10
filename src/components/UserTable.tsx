import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Modal } from "./Modal";

interface IUser {
  data: any;
}

const actionBtn = (
  <div>
    <Button>
      <i className="pi pi-eye mr-2"></i> View More{" "}
    </Button>
  </div>
);

export const UserTable = (props: IUser) => {
  const [isModalVisible, setIsModalVisible] = useState<Boolean>(false);
  const [loading, setLoading] = useState<Boolean>(false);
  const [userDetails, setUserDetails] = useState([]);
  const [userLatestPost, setUserLatestPost] = useState([]);

  const { userDataLoading, allUsers, userApirror } = props.data;

  const userData = allUsers?.map((value: any) => {
    return {
      id: value.id,
      name: value.name,
      email: value.email,
      phone: value.phone,
      website: value.website,
      company: value.company?.name,
    };
  });

  const getUserById = async (data: any) => {
    let id = data.id;
    setIsModalVisible(true);
    setLoading(true);
    try {
      let data = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );

      getLatestPostByUserId(id);

      setLoading(false);
      setUserDetails(await data.json());
    } catch (error) {
      setLoading(false);
    }
  };

  const getLatestPostByUserId = async (id: any) => {
    try {
      let data = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${id}`
      );

      let json = await data.json();

      let latestPost = json.sort((a: number, b: number) => a - b);

      if (Boolean(latestPost.length > 0)) {
        setUserLatestPost(latestPost[0]);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  const userPhotoById = async (id: any) => {
    try {
      let data = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${id}`
      );

      let json = await data.json();

      let latestPost = json.sort((a: number, b: number) => a - b);

      if (Boolean(latestPost.length > 0)) {
        setUserLatestPost(latestPost[0]);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="card w-11 m-auto mt-5">
      <DataTable
        value={userData}
        tableStyle={{ minWidth: "50rem" }}
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        onRowClick={(e) => {
          getUserById(e.data);
        }}
      >
        <Column field="name" header="Name" sortable></Column>
        <Column field="email" header="Email" sortable></Column>
        <Column field="phone" header="Phone" sortable></Column>
        <Column field="website" header="Website" sortable></Column>
        <Column field="company" header="Company" sortable></Column>
        <Column
          body={(rowData) => (
            <Button onClick={() => getUserById(rowData)}>
              <i className="pi pi-eye mr-2"></i> View More{" "}
            </Button>
          )}
          header="Action"
        ></Column>
      </DataTable>

      <Modal
        isVisible={isModalVisible}
        userDetails={userDetails}
        hideModal={hideModal}
        userLatestPost={userLatestPost}
      ></Modal>
    </div>
  );
};
