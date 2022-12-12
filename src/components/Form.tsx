import { useForm } from "react-hook-form";

interface FormValues {
  cardholder: string;
  cardNumber: number;
  mm: number;
  yy: number;
  cvc: number;
}

export default function Form() {
  const { register, handleSubmit, formState: { errors }, setValue, getValues, } = useForm<FormValues>();
  
  console.log(getValues())

  const onSubmit = (data: FormValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="label-input mb-middle">
        <label>Cardholder name</label>
        <input
          {...register("cardholder", {
            required: "Can't be blank",
            pattern: {
              value: /^[a-zA-Z '.-]*$/,
              message: "Wrong format, strings only",
            },
          })}
          placeholder="e.g. Jane Appleseed"
          className={`mt-xxs ${errors.cardholder ? "error-border" : ""}`}
        />
        {errors.cardholder && (
          <p className="error">{errors.cardholder.message}</p>
        )}
      </div>

      <div className="label-input mb-middle">
        <label>Card number</label>
        <input
          {...register("cardNumber", {
            required: "Can't be blank",
            pattern: {
              value: /([0-9]{4} ?){4}/,
              message: "Wrong format, number only",
            },
            onChange: (e) => {
              // add spaces between every 4 digits
              setValue(
                "cardNumber",
                e.target.value
                  .replaceAll(" ", "")
                  .replace(/(.{4})/g, "$1 ")
                  .trim()
              );
            },
          })}
          maxLength={19}
          placeholder="e.g. 1234 5678 9123 0000"
          className={`mt-xxs ${errors.cardNumber ? "error-border" : ""}`}
        />
        {errors.cardNumber && (
          <p className="error">{errors.cardNumber.message}</p>
        )}
      </div>

      <div className="date-cvc mb-middle">
        <div>
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
              className={`month ${errors.mm ? "error-border" : ""}`}
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
              className={`year ${errors.cardNumber ? "error-border" : ""}`}
            />
          </div>
          {(errors.mm && <p className="error">{errors.mm.message}</p>) ||
            (errors.yy && <p className="error">{errors.yy.message}</p>)}
        </div>
        <div className="cvc-wrapp">
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
            className={`cvc ${errors.cvc ? "error-border" : ""}`}
          />
          {errors.cvc && <p className="error">{errors.cvc.message}</p>}
        </div>
      </div>

      <button type="submit">Confirm</button>
    </form>
  );
}
