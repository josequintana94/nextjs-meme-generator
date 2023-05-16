"use client";
import { useForm } from "react-hook-form";
import { MemeTemplate } from "../(data)/types";
import MemeDisplay from "./MemeDisplay";

const textValues = (template: MemeTemplate) =>
  template.textareas.reduce(
    (values, ta) => ({ ...values, [ta.id]: ta.text }),
    {} as Record<string, string>
  );

const MemeEditor = ({ templates }: { templates: MemeTemplate[] }) => {
  const { register, handleSubmit, watch, setValue } = useForm<{
    template: string;
    values: Record<string, string>;
  }>({
    defaultValues: {
      template: templates[0].id,
      values: textValues(templates[0]),
    },
  });

  const templateId = watch("template");
  const template = templates.find((t) => t.id === templateId)!;

  const values = watch("values");

  return (
    <form>
      <div className="grid xs:grid-cols-1 md:grid-cols-[60%_40%]">
        <MemeDisplay {...template} values={values} />
        <div className="pl-2 text-black">
          <select
            className="select select-bordered w-full"
            value={templateId}
            onChange={(event) => {
              const newTemplate = templates.find(
                (t) => t.id === event.target.value
              )!;

              setValue("template", newTemplate.id);
              setValue("values", textValues(newTemplate));
            }}
          >
            <option disabled>Pick your template</option>
            {templates.map((t) => (
              <option key={t.id} value={t.id}>
                {t.id}
              </option>
            ))}
          </select>
          {template.textareas.map((textarea, index) => (
            <div key={index} className="mt-5">
              <label htmlFor={textarea.id}>{textarea.id}</label>
              <div>
                <input
                  className="input w-full input-bordered"
                  type="text"
                  {...register(`values.${textarea.id}`)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </form>
  );
};

export default MemeEditor;
