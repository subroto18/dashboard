import { Chart } from "primereact/chart";

interface Props {
  data: any;
}

export const PostChart = (props: Props) => {
  const { userWithPostData, userPostAPiLoading, userPostAPiFailed } =
    props.data;
  const userNameArray = userWithPostData?.map((data: any) => data.name);
  const userPostArray = userWithPostData?.map((data: any) => data.num_of_post);

  const documentStyle = getComputedStyle(document.documentElement);

  const data = {
    labels: userNameArray,
    datasets: [
      {
        type: "line",
        label: "",
        borderColor: documentStyle.getPropertyValue("--blue-500"),
        borderWidth: 2,
        fill: false,
        tension: 0.4,
        data: userPostArray,
      },
      {
        type: "bar",
        label: "",
        backgroundColor: documentStyle.getPropertyValue("--green-500"),
        data: userPostArray,
        borderColor: "white",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="grid">
      <div className="col-12  md:col-12 sm:col-12">
        <div className="card">
          <div>
            {userPostAPiLoading ? (
              <div>
                <h1>Loading</h1>
              </div> ? (
                userPostAPiFailed
              ) : (
                <div>
                  <h1>Something went wrong</h1>
                </div>
              )
            ) : (
              <Chart type="line" data={data} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
