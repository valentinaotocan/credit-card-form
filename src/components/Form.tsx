import { useForm } from "react-hook-form";

interface FormValues {
  cardholder: string;
  cardNumber: number;
  mm: number;
  yy: number;
  cvc: number;
}

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit = (data: FormValues) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-fd-c mb-middle">
        <label className="mb-xxs">Cardholder name</label>
        <input
          {...register("cardholder", {
            required: "Can't be blank",
            pattern: {
              value: /^[a-zA-Z '.-]*$/,
              message: "Wrong format, strings only",
            },
          })}
          placeholder="e.g. Jane Appleseed"
          className="mt-xxs"
        />
        {errors.cardholder && (
          <p className="error">{errors.cardholder.message}</p>
        )}
      </div>

      <div className="flex flex-fd-c mb-middle">
        <label>Card number</label>
        <input
          {...register("cardNumber", {
            required: "Can't be blank",
            pattern: {
              value: /[0-9]{13,16}/,
              message: "Wrong format, number only",
            },
          })}
          placeholder="0000000000000000"
          className="mt-xxs"
        />
        {errors.cardNumber && (
          <p className="error">{errors.cardNumber.message}</p>
        )}
      </div>

      <div className="flex mb-middle">
        <div className="flex-fd-c">
          <label>Exp. date (mm/yy)</label>
          <div className="flex mt-xxs">
            <input
              {...register("mm", {
                required: "Can't be blank",
                pattern: {
                  value: /[0-12]{2}/,
                  message: "Wrong format, number only",
                },
              })}
              placeholder="mm"
              className="mm"
            />

            <input
              {...register("yy", {
                required: "Can't be blank",
                pattern: {
                  value: /[0-9]{2}/,
                  message: "Wrong format, number only",
                },
              })}
              placeholder="yy"
              className="yy"
            />
          </div>
            {(errors.mm && <p className="error">{errors.mm.message}</p>) ||
              (errors.yy && <p className="error">{errors.yy.message}</p>)}
        </div>
        <div className="flex flex-fd-c">
          <label>cvc</label>
          <input
            {...register("cvc", {
              required: "Can't be blank",
              pattern: {
                value: /[0-9]{3}/,
                message: "Wrong format, number only",
              },
            })}
            placeholder="e.g 123"
            className="cvc mt-xxs"
          />
          {errors.cvc && <p className="error">{errors.cvc.message}</p>}
        </div>
      </div>

      <input type="submit" />
    </form>
  );
}
