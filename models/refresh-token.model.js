import { DataTypes } from 'sequelize'

const model = sequelize => {
    const attributes = {
        token: { type: DataTypes.STRING },
        expires: { type: DataTypes.DATE },
        created: { type: DateType.DATE, allowNull: False, defaultValue: DateType.NOW },
        createdByIp: { type: DataTypes.STRING},
        revoked: {type: DataTypes.DATE },
        createdByIp: { type: DataTypes.STRING},
        isExpired: {
            type: DataTypes.VIRTUAL,
            get() {return Date.now() >= this.expires }
        },
        isActive: {
            type: DataTypes.VIRTUAL,
            get() {return !this.revoked && !this.isExpired }
        }
    }

    const options = {
        timestamps: false
    }
    return sequelize.define('refreshToken', attributes, options)
}
export default model
