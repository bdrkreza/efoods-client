import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardImage,
  CCardTitle,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
} from "@coreui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CreateFood } from "../../../../services/redux/actionCreator/foodAction";
import { AppState } from "../../../../services/redux/stores";
import { IFormData } from "../../../../types";

export default function AddFoodItem() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<IFormData>({} as IFormData);
  const [file, setFile] = useState<string>("");
  const [imgData, setImgData] = useState(null);

  const handleOnChange = (e: any): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onChangePicture = (e: any) => {
    setFile(e.target.files[0]);
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        // @ts-ignore
        setImgData(reader?.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onSubmit = (e: any) => {
    const newFormData = new FormData();
    newFormData.append("name", formData.name);
    newFormData.append("price", formData.price);
    newFormData.append("image", file);
    newFormData.append("type", formData.type);
    newFormData.append("rating", formData.rating);
    newFormData.append("category", formData.category);
    newFormData.append("description", formData.description);
    // @ts-ignore
    dispatch(CreateFood(newFormData));
  };

  const { loading, status } = useSelector(
    (state: AppState) => state.foodCreate
  );
  return (
    <div className="container">
      <CCard>
        <CCardHeader>Add Product</CCardHeader>
        {status === "error" && (
          <div className="alert alert-success" role="alert">
            <h1>Something went wrong. Please try again later.</h1>
          </div>
        )}
        {status === "success" && (
          <div className="alert alert-success" role="alert">
            <h1>Create successfully</h1>
          </div>
        )}
        <CCardBody>
          <CRow>
            <CForm className="row g-5 p-4 m-auto d-flex justify-content-center bg-light align-items-center ">
              <CRow className="add-food-reverse">
                <CCol sm={12} lg={6} className="mt-5">
                  <CRow className="g-3">
                    <CCol md={6}>
                      <CFormLabel>Name</CFormLabel>
                      <CFormInput
                        onChange={handleOnChange}
                        name="name"
                        type="text"
                      />
                    </CCol>
                    <CCol md={6}>
                      <CFormLabel>Price</CFormLabel>
                      <CFormInput
                        onChange={handleOnChange}
                        name="price"
                        type="text"
                      />
                    </CCol>
                    <CCol md={6}>
                      <CFormLabel>size</CFormLabel>
                      <CFormInput
                        onChange={handleOnChange}
                        name="type"
                        type="text"
                      />
                    </CCol>
                    <CCol md={6}>
                      <CFormLabel>category</CFormLabel>
                      <CFormInput
                        onChange={handleOnChange}
                        name="category"
                        type="text"
                      />
                    </CCol>
                    <CCol md={6}>
                      <CFormLabel>rating</CFormLabel>
                      <CFormInput
                        onChange={handleOnChange}
                        name="rating"
                        type="text"
                      />
                    </CCol>

                    <CCol xs={12}>
                      <CFormLabel>Description</CFormLabel>
                      <textarea
                        onChange={handleOnChange}
                        className="form-control"
                        name="description"
                      ></textarea>
                    </CCol>
                  </CRow>

                  <CCol xs={12} className="text-center mt-5">
                    <CButton
                      disabled={loading}
                      onClick={onSubmit}
                      type="button"
                    >
                      {loading ? "Loading..." : "Add Product"}
                    </CButton>
                  </CCol>
                </CCol>
                <CCol sm={12} lg={6} className="m-auto">
                  <CCard className="w-100">
                    {/* @ts-ignore */}
                    <CCardImage orientation="top" src={imgData} />
                    <CCardBody className="text-center">
                      <CCardTitle>Image Upload</CCardTitle>
                    </CCardBody>
                    <div className="file-Upload">
                      <div className="file btn w-100 btn-primary">
                        Upload
                        <input
                          onChange={onChangePicture}
                          type="file"
                          name="file"
                        />
                      </div>
                    </div>
                  </CCard>
                </CCol>
              </CRow>
            </CForm>
          </CRow>
        </CCardBody>
      </CCard>
    </div>
  );
}
