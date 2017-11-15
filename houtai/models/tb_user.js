/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tb_user', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		username: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		password: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		id_card: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		phone: {
			type: DataTypes.STRING(15),
			allowNull: true
		},
		header: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		nation: {
			type: DataTypes.STRING(10),
			allowNull: true
		},
		branch_id: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		wx_num: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		qq_num: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		age: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		sex: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		total_score: {
			type: "DOUBLE(11,2)",
			allowNull: true,
			defaultValue: '0.00'
		},
		party_status: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '0'
		},
		birthday: {
			type: DataTypes.STRING(32),
			allowNull: true
		},
		special: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		education: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		job_rank: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		hometown: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		address: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		join_party_time: {
			type: DataTypes.STRING(32),
			allowNull: true
		},
		lead_person: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		salary: {
			type: "DOUBLE",
			allowNull: true
		},
		last_pay_time: {
			type: DataTypes.STRING(32),
			allowNull: true
		},
		disabled: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'tb_user',
		timestamps: false
	});
};
