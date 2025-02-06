import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./selectTemplate.scss";
// import { ClipLoader } from "react-spinners";
import Loader from "../../loader/index";
import closeBtn from "@/../public/modals/upgrade-now/close-btn.png";
// import getAllTemplates from "@/customHooks/singleAiFaceSwap/getAllTemplates";
import { toast } from "react-toastify";

const toastOptions = {
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};

export default function SelectTemplatesPopup({
  setShowTemplatePopup,
  templateNumber,
  setFormData,
  selectedTemplatesFromProps,
  allTemplatesData,
  allCategories,
  setAllCategories,
  setAllTemplatesData,
  showTemplatePopup,
  action
}) {
  // const [allTemplatesData, setAllTemplatesData] = useState();
  // const [allCategories, setAllCategories] = useState([]);
  const [templateUpdateStatus, setTemplateUpdateStatus] = useState();
  const [isAllTemplatesLoading, setIsAllTemplatesLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredTemplates, setFilteredTemplates] = useState([]);
  const [selectedTemplates, setSelectedTemplates] = useState(
    selectedTemplatesFromProps || []
  );
 
  // Fetch templates data when the component mounts
  // useEffect(() => {
  //   const fetchTemplates = async () => {
  //     try {
  //       const [allTemplates, templateUpdateStatus] = await getAllTemplates();
  //       setAllTemplatesData(allTemplates);
  //       setTemplateUpdateStatus(templateUpdateStatus);
  //       setTimeout(() => {
  //         setIsAllTemplatesLoading(false);
  //       }, [1000]);
  //     } catch (error) {
  //       console.error("Error fetching templates:", error);
  //       setIsAllTemplatesLoading(true);
  //     }
  //   };

  //   fetchTemplates();
  // }, []);

  useEffect(()=>{
    if(action=="edit"){
      setSelectedTemplates(selectedTemplatesFromProps);
      console.log('updates handled in edit states')
    }
  },[selectedTemplatesFromProps])

  // Extract categories from the fetched templates and set default category
  useEffect(() => {
    if (allTemplatesData) {
      // const categories = allTemplatesData.map((item)=>item.category);
      // setAllCategories(categories);

      // Automatically select the first category as the default
      if (allCategories.length > 0) {
        console.log(allCategories[0]);
        setSelectedCategory(allCategories[0]);
      }
    }
  }, [allTemplatesData]);

  // Update the filtered templates whenever the selected category changes
  useEffect(() => {
    if (allTemplatesData) {
      const templates = allTemplatesData;
      console.log(selectedCategory, "category", templates);
      const filteredTemplates = templates.filter(
        (template) => template.category === selectedCategory.name
      );
      // console.log(filteredTemplates,'filterdata')
      setFilteredTemplates(filteredTemplates);

      setTimeout(() => {
        setIsAllTemplatesLoading(false);
      }, 3000);
    }
  }, [allTemplatesData, selectedCategory]);

  // Format category names for display
  // const formatCategory = (category) => {
  //   return category
  //     .replace(/([a-z])([A-Z])/g, "$1 $2")
  //     .replace(/^./, (str) => str.toUpperCase());
  // };

  // console.log(selectedTemplates);
  // console.log("filter", filteredTemplates);
  // handle template selection with a maximum limit
  const handleTemplateSelection = (item,e) => {
    setSelectedTemplates((prev) => {
      if (prev.includes(item.id)) {
        return prev.filter((template) => template !== item.id);
      } else if(prev.length < templateNumber){
        return [...prev, item.id];
      }else{
        return prev
      }});

    if(selectedTemplates.length>=templateNumber){
        const checked = e.target.checked;
        if(checked){
          toast.warning(
            `You can select only ${templateNumber} templates.`,
            toastOptions
          );
        } 
    }
  };

  const handlePopUpSave = () => {
    if (selectedTemplates.length !== Number(templateNumber)) {
      toast.warning(`please select ${templateNumber} templates `, toastOptions);
    }
    if (selectedTemplates?.length == templateNumber) {
      setShowTemplatePopup(false);
      setFormData((prev) => ({ ...prev, templates: selectedTemplates }));
      // toast.success("Templates added successfully!!",toastOptions)
    }
  };

  return (
    <div className="flex-col-center TemplatePopup" style={{transform:showTemplatePopup ? "translateY(0%)" : ""}}>
      <div className="flex-col-center popupContent">
        <div className="flex-col-center mainContainer">
          {isAllTemplatesLoading && (
            <div className="flex-col-center loaderTemplate">
              <Loader />
            </div>
          )}

          <div className="flex-col-center mainContainer">
            <div className="flex-row-center categoryContainer">
              {allCategories?.slice(0, 6)?.map((item, index) => (
                <div
                  key={index}
                  className={`flex-row-center categoryBtn ${
                    selectedCategory.name === item.name
                      ? "selectedCategory"
                      : ""
                  }`}
                  onClick={() => setSelectedCategory(item)}
                >
                  {item.name}{" "}
                </div>
              ))}
            </div>

            {/* templates */}
            <div className="flex-row-center templateMainContainer">
              {filteredTemplates?.slice(0, 20)?.map((item, idx) => (
                <div key={idx} className="flex-col-center templateContainer">
                  <input
                    id={item.id}
                    type="checkbox"
                    checked={selectedTemplates.includes(item.id)}
                    onChange={(e) => handleTemplateSelection(item,e)}
                    className="customCheckbox"
                  />
                  <label htmlFor={item.id} className="customLabel">
                    <Image
                      src={item.card}
                      alt="template"
                      width={15}
                      height={15}
                      className="imgTemp"
                    />
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* submit */}

        <div
          onClick={() => {
            handlePopUpSave();
          }}
          className="flex-row-center saveButton"
        >
          SAVE
        </div>

        {/* close */}
        <div
          onClick={() => setShowTemplatePopup(false)}
          className="flex-row-center closeBtn"
        >
          <Image src={closeBtn} alt="close" />
        </div>
      </div>
    </div>
  );
}
