import { DataTypes } from "sequelize";

const defaultScheduleModel = (sequelize: any) => {
  const DefaultSchedule = sequelize.define(
    "default_schedule",
    {
      sch1_sch2: {
        type: DataTypes.STRING(10),  // SCH1/SCH2 field, e.g., '10', '10S'
        allowNull: false,
        validate: {
          is: /^[0-9A-Z]+$/,  // Allow alphanumeric values, no special characters
        },
      },
      code: {
        type: DataTypes.STRING(10),  // CODE field, e.g., 'S1', 'S2'
        allowNull: false,
        validate: {
          is: /^[0-9A-Z]+$/,  // Alphanumeric validation for CODE
        },
      },
      c_code: {
        type: DataTypes.STRING(10),  // CODE field, e.g., 'S1', 'S2'
        allowNull: false,
        validate: {
          is: /^[0-9A-Z]+$/,  // Alphanumeric validation for CODE
        },
      },
      schDesc: {
        type: DataTypes.STRING,  // Sch Desc field, e.g., 'Sch.10'
        allowNull: false,
      },
      arrange_od:{
        type:DataTypes.INTEGER,
        allowNull:true,
      },
    },
    {
      timestamps: true,  // Adds createdAt, updatedAt fields
      underscored: true,  // Use snake_case for column names
    }
  );

  return DefaultSchedule;
};

export default defaultScheduleModel;
