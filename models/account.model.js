import {DataTypes} from 'sequelize'


const model = sequelize => {
    const attributes = {
        email: {
            type: DataTypes.STRING, allowNull: false,
        },
        passwordHash: {
            type: DataTypes.STRING, allowNull: false
        },
        title: {
            type: DataTypes.String, allowNull: false
        },
        firstName: {
            type: DataTypes.String, allowNull: false
        },
        lastName: {
            type: DataTypes.String, allowNull: false
        },
        acceptTerms: {
            type: DataTypes.BOOLEAN
        },
        verificationToken : {
            type: DataTypes.STRING
        },
        verify: {
            type: DataTypes.DATE
        },
        resetToken : {
            type: DataTypes.STRING
        },
        resetTokenExpires: {
            type: DataTypes.DATE
        },
        passworReset: {
            type: DataTypes.DATE
        },
        created: {
            type: DataTypes.DATE,
            allowNull: false,
            default: DataTypes.NOW
        },
        isVerified: {
            type: DataTypes.VIRTUAL,
            get() {return !!(this.verified || this.passworReset)}
        }
    }
    const options = {
        timestamps: false,
        defaultscope: {
            attributes: {exclude: ['passwordHash']}
        },
        scopes: {
            withHash: {
                attributes: {},
            }
        }
    }
}
export default model
